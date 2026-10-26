import { apiClient } from '../helpers';

export default {
    namespaced: true,
    state: () => ({ initURL: '/app/' }),
    actions: {
        async history(_, { url }) {
            const data = await apiClient.get(`/api/app/${url}/import/history`);
            return data;
        },
        async deleteHistory(_, { url, uuid }) {
            const data = await apiClient.delete(`/api/app/${url}/import/history/${uuid}`);
            return data;
        },
        async upload(_, { url, form }) {
            const data = await apiClient.post(`/api/app/${url}/import`, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return data;
        },
    },
};
