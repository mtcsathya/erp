import { apiClient } from '../helpers';

export default {
    namespaced: true,
    state: () => ({ initURL: '/product' }),
    actions: {
        async info() {
            const data = await apiClient.get('/product');
            return data;
        },
        async update(_, { form }) {
            const data = await apiClient.post('/product', form);
            return data;
        },
        async license(_, { form }) {
            const data = await apiClient.post('/product/license', form);
            return data;
        },
    },
};
