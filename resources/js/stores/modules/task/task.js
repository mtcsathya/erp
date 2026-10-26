import { apiClient, crudActions, crudMutations, crudGetters } from '../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/tasks',
        formErrors: {},
        list: {},
    }),
    actions: {
        ...crudActions,
        async updateTags(_, { uuid, form }) {
            return await apiClient.post(`/app/tasks/${uuid}/tags`, form);
        },
        async status(_, { uuid, form }) {
            return await apiClient.post(`/app/tasks/${uuid}/status`, form);
        },
        async toggleFavorite(_, { uuid }) {
            return await apiClient.post(`/app/tasks/${uuid}/toggle-favorite`);
        },
        async addList(_, { form }) {
            return await apiClient.post('/app/tasks/lists', form);
        },
        async reorderList(_, { form }) {
            return await apiClient.post('/app/tasks/lists/reorder', form);
        },
        async moveList(_, { uuid, form }) {
            return await apiClient.post(`/app/tasks/lists/${uuid}/move`, form);
        },
        async reorderItems(_, { form }) {
            return await apiClient.post('/app/tasks/reorder', form);
        },
    },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
    modules: {
        dashboard: {
            namespaced: true,
            state: () => ({ initURL: '/app/tasks/dashboard/' }),
            actions: {
                async getStat() {
                    return await apiClient.get('/app/tasks/dashboard/stat');
                },
                async getFavorite() {
                    return await apiClient.get('/app/tasks/dashboard/favorite');
                },
            },
        },
        checklist: {
            namespaced: true,
            state: () => ({ initURL: '/app/tasks', formErrors: {} }),
            actions: { ...crudActions },
            mutations: { ...crudMutations },
            getters: { ...crudGetters },
        },
        member: {
            namespaced: true,
            state: () => ({ initURL: '/app/tasks', formErrors: {} }),
            actions: { ...crudActions },
            mutations: { ...crudMutations },
            getters: { ...crudGetters },
        },
        media: {
            namespaced: true,
            state: () => ({ initURL: '/app/tasks', formErrors: {} }),
            actions: { ...crudActions },
            mutations: { ...crudMutations },
            getters: { ...crudGetters },
        },
        repeat: {
            namespaced: true,
            state: () => ({ initURL: '/app/tasks', formErrors: {} }),
            actions: { ...crudActions },
            mutations: { ...crudMutations },
            getters: { ...crudGetters },
        },
    },
};
