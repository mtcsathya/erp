import { apiClient, crudActions, crudMutations, crudGetters } from '../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/chats',
        formErrors: {},
        list: {},
    }),
    actions: {
        ...crudActions,
        async getChats() {
            return await apiClient.get('/app/chats');
        },
        async getMessages(_, { uuid, params }) {
            return await apiClient.get(`/app/chats/${uuid}/messages`, { params });
        },
        async sendMessage(_, { uuid, form }) {
            return await apiClient.post(`/app/chats/${uuid}/messages`, form);
        },
    },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
