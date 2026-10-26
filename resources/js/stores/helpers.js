import axios from 'axios';
import lodash from 'lodash';
import { useToast } from 'vue-toastification';

// Deep clone helper
const deepClone = (obj) => lodash.cloneDeep(obj);

// Convert camelCase keys to snake_case (for sending to Laravel)
function toSnakeCase(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) return obj.map(toSnakeCase);
    const result = {};
    for (const key of Object.keys(obj)) {
        const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        result[snakeKey] = toSnakeCase(obj[key]);
    }
    return result;
}

// Convert snake_case keys to camelCase (for receiving from Laravel)
function toCamelCase(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) return obj.map(toCamelCase);
    const result = {};
    for (const key of Object.keys(obj)) {
        const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
        result[camelKey] = toCamelCase(obj[key]);
    }
    return result;
}

// Build URL with query params
function buildUrl(url, params = {}) {
    if (!params || lodash.isEmpty(params)) return url;
    // Remove empty values
    const cleaned = {};
    for (const [key, val] of Object.entries(params)) {
        if (val !== '' && val != null) {
            cleaned[lodash.snakeCase(key)] = val;
        }
    }
    if (lodash.isEmpty(cleaned)) return url;
    const qs = Object.entries(cleaned).map(([k, v]) => `${k}=${v}`).join('&');
    return `${url}?${qs}`;
}

// Create the API client with interceptors
const apiClient = axios.create({
    baseURL: '/api/v1',
    withCredentials: true,
});

// Request interceptor - add headers, convert keys to snake_case
apiClient.interceptors.request.use(
    (config) => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';

        // Convert params to snake_case
        if (config.params) {
            config.params = toSnakeCase(config.params);
        }

        // Convert data to snake_case (unless it's FormData for uploads)
        if (config.data && !(config.data instanceof FormData)) {
            config.data = toSnakeCase(config.data);
        }

        // Handle file uploads
        if (config.upload) {
            config.headers['Content-Type'] = 'multipart/form-data';
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor - unwrap data, convert keys to camelCase
apiClient.interceptors.response.use(
    (response) => {
        let data = response.data;
        if (typeof data === 'object' && data !== null) {
            data = toCamelCase(data);
        }
        return data; // Return data directly, not the axios response wrapper
    },
    (error) => {
        let data = error.response?.data;
        const status = error.response?.status;
        if (typeof data === 'object' && data !== null) {
            data = toCamelCase(data);
            data.responseStatus = status;
        }
        return Promise.reject(data || error);
    }
);

// HTTP helper functions matching the original app patterns
function listRequest(url, params = {}) {
    return apiClient({ url: buildUrl(url, params), method: 'get' });
}

function getRequest(url, uuid, params = {}) {
    return apiClient({ url: buildUrl(`${url}/${uuid}`, params), method: 'get' });
}

function storeRequest(url, data, params = {}) {
    return apiClient({ url: buildUrl(url, params), method: 'post', data });
}

function updateRequest(url, uuid, data, params = {}) {
    return apiClient({ url: buildUrl(`${url}/${uuid}`, params), method: 'patch', data });
}

function deleteRequest(url, uuid, params = {}) {
    return apiClient({ url: buildUrl(`${url}/${uuid}`, params), method: 'delete' });
}

function customRequest(config) {
    return apiClient(config);
}

// Error handler - extracts validation errors and shows toast
function handleError(error) {
    if (!error) return error;

    if (error.errors) {
        // Validation errors - return them for form binding
        return error.errors;
    }

    if (error.message) {
        // Show error toast
        try {
            const toast = useToast();
            toast.error(error.message);
        } catch (e) {
            console.error(error.message);
        }
    }

    return error;
}

// Toast helper
function showSuccess(message) {
    if (message) {
        try {
            const toast = useToast();
            toast.success(message);
        } catch (e) {
            console.log('Success:', message);
        }
    }
}

// Export the API client for direct use
export { apiClient, customRequest, toSnakeCase, toCamelCase, deepClone };

// Generic CRUD actions used by all store modules
export const crudActions = {
    resetFormErrors({ commit }) {
        commit('RESET_FORM_ERRORS');
    },

    async preRequisite({ state }, params = {}) {
        let url = state.initURL + '/pre-requisite';
        let queryParams = {};

        if (params.data) {
            if (Array.isArray(params.data)) {
                queryParams.type = params.data.join(',');
            } else if (typeof params.data === 'object') {
                queryParams = params.data;
            } else {
                queryParams.type = params.data;
            }
        }

        if (params.uuid) {
            queryParams.uuid = params.uuid;
        }

        return customRequest({ url: buildUrl(url, queryParams), method: 'GET' })
            .catch(error => { handleError(error); throw error; });
    },

    async list({ state }, params = {}) {
        return listRequest(state.initURL, params.params || params)
            .catch(error => { handleError(error); throw error; });
    },

    async get({ state }, params = {}) {
        const uuid = typeof params === 'string' ? params : params.uuid;
        return getRequest(state.initURL, uuid, params.params)
            .catch(error => { handleError(error); throw error; });
    },

    async create({ state, commit }, params = {}) {
        return storeRequest(state.initURL, params.form || params)
            .then(data => { showSuccess(data.message); return data; })
            .catch(error => { commit('SET_FORM_ERRORS', handleError(error)); throw error; });
    },

    async update({ state, commit }, params = {}) {
        return updateRequest(state.initURL, params.uuid, params.form || params)
            .then(data => { showSuccess(data.message); return data; })
            .catch(error => { commit('SET_FORM_ERRORS', handleError(error)); throw error; });
    },

    async delete({ state }, params = {}) {
        const uuid = typeof params === 'string' ? params : params.uuid;
        const force = params.force || false;
        return deleteRequest(state.initURL, uuid, { force })
            .then(data => { showSuccess(data.message); return data; })
            .catch(error => { handleError(error); throw error; });
    },

    // Alias: "fetch" is used by some modules
    async fetch({ state }, params = {}) {
        return customRequest({
            url: state.initURL,
            method: 'GET',
            params: params.type ? { type: params.type } : {},
        }).catch(error => { handleError(error); throw error; });
    },

    resetState({ commit }) {
        commit('RESET_STATE');
    },
};

export const crudMutations = {
    SET_FORM_ERRORS(state, errors) { state.formErrors = errors || {}; },
    RESET_FORM_ERRORS(state) { state.formErrors = {}; },
    RESET_STATE(state) { state.formErrors = {}; },
    SET_LIST(state, data) { state.list = data; },
};

export const crudGetters = {
    getFormErrors: (state) => state.formErrors,
};
