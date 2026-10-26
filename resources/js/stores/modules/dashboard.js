import { apiClient } from '../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/dashboard/',
    }),
    actions: {
        async getStat() {
            const data = await apiClient.get('/app/dashboard/stat');
            return data;
        },
        async getStudentChartData(_, { type }) {
            const data = await apiClient.get('/app/dashboard/student-chart', { params: { type } });
            return data;
        },
        async getTransactionChartData(_, { type }) {
            const data = await apiClient.get('/app/dashboard/transaction-chart', { params: { type } });
            return data;
        },
    },
    modules: {
        search: {
            namespaced: true,
            state: () => ({ initURL: '/app/search' }),
            actions: {
                async search(_, { query }) {
                    const data = await apiClient.get('/app/search', { params: { q: query } });
                    return data;
                },
            },
        },
    },
};
