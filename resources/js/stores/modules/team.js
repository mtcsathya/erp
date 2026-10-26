import { apiClient } from '../helpers';
import { crudActions, crudMutations, crudGetters } from '../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/teams',
        formErrors: {},
        list: {},
    }),
    actions: {
        ...crudActions,
        async select({ commit }, { uuid }) {
            const data = await apiClient.post(`/api/app/teams/${uuid}/select`);
            return data;
        },
        async storeConfig(_, { uuid, form }) {
            const data = await apiClient.post(`/api/app/teams/${uuid}/config`, form);
            return data;
        },
        async updateAdmin(_, { uuid, form }) {
            const data = await apiClient.post(`/api/app/teams/${uuid}/admin`, form);
            return data;
        },
        async updateUsers(_, { uuid, form }) {
            const data = await apiClient.post(`/api/app/teams/${uuid}/users`, form);
            return data;
        },
        async sync(_, { form }) {
            const data = await apiClient.post('/app/teams/sync', form);
            return data;
        },
        async import(_, { form }) {
            const data = await apiClient.post('/app/teams/import', form);
            return data;
        },
        async getPeriods(_, { uuid }) {
            const data = await apiClient.get(`/api/app/teams/${uuid}/periods`);
            return data;
        },
    },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
    modules: {
        role: {
            namespaced: true,
            state: () => ({ initURL: '/app/teams', formErrors: {} }),
            actions: { ...crudActions },
            mutations: { ...crudMutations },
            getters: { ...crudGetters },
        },
        permission: {
            namespaced: true,
            state: () => ({ initURL: '/app/teams', formErrors: {} }),
            actions: { ...crudActions },
            mutations: { ...crudMutations },
            getters: { ...crudGetters },
        },
    },
};
