import { apiClient } from '../helpers';

export default {
    namespaced: true,
    state: () => ({ initURL: '/app/support' }),
    actions: {
        async generateToken() {
            const data = await apiClient.post('/app/support/generate-token');
            return data;
        },
    },
};
