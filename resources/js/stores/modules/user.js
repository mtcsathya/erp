import { apiClient } from '../helpers';
import { crudActions, crudMutations, crudGetters } from '../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/users',
        formErrors: {},
        list: {},
    }),
    actions: {
        ...crudActions,
        async status(_, { uuid, form }) {
            const data = await apiClient.post(`/api/app/users/${uuid}/status`, form);
            return data;
        },
        async forceChangePassword(_, { uuid }) {
            const data = await apiClient.post(`/api/app/users/${uuid}/force-change-password`);
            return data;
        },
        async toggleForceChangePassword(_, { uuid }) {
            const data = await apiClient.post(`/api/app/users/${uuid}/toggle-force-change-password`);
            return data;
        },
    },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
    modules: {
        profile: {
            namespaced: true,
            state: () => ({ initURL: '/app/user' }),
            actions: {
                async fetch() {
                    const data = await apiClient.get('/app/user');
                    return data;
                },
                async preference(_, { form }) {
                    const data = await apiClient.post('/app/user/preference', form);
                    return data;
                },
                async changePassword(_, { form }) {
                    const data = await apiClient.post('/app/user/password', form);
                    return data;
                },
                async updateProfile(_, { form }) {
                    const data = await apiClient.post('/app/user/profile', form);
                    return data;
                },
                async updateAccount(_, { form }) {
                    const data = await apiClient.post('/app/user/account', form);
                    return data;
                },
                async verifyAccount(_, { form }) {
                    const data = await apiClient.post('/app/user/account/verify', form);
                    return data;
                },
            },
        },
    },
};
