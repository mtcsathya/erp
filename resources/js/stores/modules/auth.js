import { apiClient } from '../helpers';

// Auth module with sub-modules: user, register, password, failedLoginAttempt

const user = {
    namespaced: true,
    state: () => ({
        uuid: '',
        email: '',
        username: '',
        name: '',
        avatar: '',
        status: '',
        roles: [],
        permissions: [],
        preference: {},
        isSuperAdmin: false,
        forceChangePassword: false,
        currentTeamId: null,
        currentPeriodId: null,
        scope: null,
        scopeDetail: null,
    }),
    actions: {
        async setCSRF() {
            // CSRF cookie is served from the root, not the API
            await apiClient.get('/sanctum/csrf-cookie', { baseURL: '/' });
        },
        async login({ commit, dispatch }, { form }) {
            const data = await apiClient.post('/auth/login', form);
            commit('SET_USER', data);
            await dispatch('config/get', null, { root: true });
            await dispatch('layout/setLayout', data.preference || {}, { root: true });
            await dispatch('navigation/setNavigation', null, { root: true });
            return data;
        },
        async requestOtp({ commit }, { form }) {
            return await apiClient.post('/auth/login/otp/request', form);
        },
        async confirmOtp({ commit, dispatch }, { form }) {
            const data = await apiClient.post('/auth/login/otp/confirm', form);
            commit('SET_USER', data);
            await dispatch('config/get', null, { root: true });
            await dispatch('navigation/setNavigation', null, { root: true });
            return data;
        },
        async logout({ commit }) {
            await apiClient.post('/auth/logout');
            commit('CLEAR_USER');
        },
        async fetch({ commit }) {
            const data = await apiClient.get('/app/auth/user');
            commit('SET_USER', data);
            return data;
        },
        async unimpersonate({ commit }) {
            return await apiClient.post('/app/auth/unimpersonate');
        },
        setUser({ commit }, data) {
            commit('SET_USER', data);
        },
        resetUser({ commit }) {
            commit('CLEAR_USER');
        },
        setUserPreference({ commit }, preference) {
            commit('SET_PREFERENCE', preference);
        },
        resetForceChangePassword({ commit }) {
            commit('SET_FORCE_CHANGE_PASSWORD', false);
        },
    },
    mutations: {
        SET_USER(state, data) {
            const u = data.user || data;
            state.uuid = u.uuid || '';
            state.email = u.email || '';
            state.username = u.username || '';
            state.name = u.name || '';
            state.avatar = u.avatar || '';
            state.status = u.status || '';
            state.roles = u.roles || [];
            state.permissions = u.permissions || [];
            state.preference = u.preference || {};
            state.isSuperAdmin = u.isSuperAdmin || false;
            state.forceChangePassword = u.forceChangePassword || false;
            state.currentTeamId = u.currentTeamId || null;
            state.currentPeriodId = u.currentPeriodId || null;
            state.scope = u.scope || null;
            state.scopeDetail = u.scopeDetail || null;
        },
        CLEAR_USER(state) {
            state.uuid = '';
            state.email = '';
            state.username = '';
            state.name = '';
            state.avatar = '';
            state.status = '';
            state.roles = [];
            state.permissions = [];
            state.preference = {};
            state.isSuperAdmin = false;
            state.forceChangePassword = false;
            state.currentTeamId = null;
            state.currentPeriodId = null;
            state.scope = null;
            state.scopeDetail = null;
        },
        SET_PREFERENCE(state, pref) { state.preference = pref; },
        SET_FORCE_CHANGE_PASSWORD(state, val) { state.forceChangePassword = val; },
    },
    getters: {
        uuid: (state) => state.uuid,
        user: (state) => state,
        isAuthenticated: (state) => !!state.uuid,
        currentTeamId: (state) => state.currentTeamId,
        currentPeriodId: (state) => state.currentPeriodId,
        roles: (state) => state.roles,
        permissions: (state) => state.permissions,
        isSuperAdmin: (state) => state.isSuperAdmin,
        forceChangePassword: (state) => state.forceChangePassword,
        hasAnyPermission: (state) => (permissions) => {
            if (state.isSuperAdmin) return true;
            return permissions.some(p => state.permissions.includes(p));
        },
        hasAllPermissions: (state) => (permissions) => {
            if (state.isSuperAdmin) return true;
            return permissions.every(p => state.permissions.includes(p));
        },
        hasRole: (state) => (roles, type = 'any') => {
            if (type === 'any') return roles.some(r => state.roles.includes(r));
            return roles.every(r => state.roles.includes(r));
        },
    },
};

const register = {
    namespaced: true,
    actions: {
        async register(_, { form }) {
            return await apiClient.post('/auth/register', form);
        },
        async emailRequest(_, { form }) {
            return await apiClient.post('/auth/register/email', form);
        },
        async emailVerification(_, { form }) {
            return await apiClient.post('/auth/register/verify', form);
        },
    },
};

const password = {
    namespaced: true,
    state: () => ({
        initURL: '/auth/password',
        passwordRequestSent: false,
        resetTokenConfirmed: false,
    }),
    actions: {
        async passwordRequest({ commit }, { form }) {
            const data = await apiClient.post('/auth/password/request', form);
            commit('SET_PASSWORD_REQUEST_SENT', true);
            return data;
        },
        async resetTokenConfirm({ commit }, { form }) {
            const data = await apiClient.post('/auth/password/confirm', form);
            commit('SET_RESET_TOKEN_CONFIRMED', true);
            return data;
        },
        async resetPassword(_, { form }) {
            return await apiClient.post('/auth/password/reset', form);
        },
    },
    mutations: {
        SET_PASSWORD_REQUEST_SENT(state, val) { state.passwordRequestSent = val; },
        SET_RESET_TOKEN_CONFIRMED(state, val) { state.resetTokenConfirmed = val; },
    },
};

const failedLoginAttempt = {
    namespaced: true,
    state: () => ({
        initURL: '/app/failed-login-attempts',
        formErrors: {},
        list: {},
    }),
};

export default {
    namespaced: true,
    modules: {
        user,
        register,
        password,
        failedLoginAttempt,
    },
};
