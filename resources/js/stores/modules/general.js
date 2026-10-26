import { apiClient } from '../helpers';

export default {
    namespaced: true,
    actions: {
        async preRequisite(_, { url, params }) {
            const data = await apiClient.get(`/api/app/${url}`, { params });
            return data;
        },
    },
};
