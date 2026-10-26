import { apiClient } from '../helpers';

export default {
    namespaced: true,
    state: () => ({ initURL: '/app/' }),
    actions: {
        async upload(_, { url, form }) {
            const data = await apiClient.post(`/api/app/${url}`, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return data;
        },
        async remove(_, { url }) {
            const data = await apiClient.delete(`/api/app/${url}`);
            return data;
        },
    },
};
