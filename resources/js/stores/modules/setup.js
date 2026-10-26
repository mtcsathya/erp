import { apiClient } from '../helpers';

export default {
    namespaced: true,
    modules: {
        install: {
            namespaced: true,
            state: () => ({ initURL: '/install', formErrors: {} }),
            actions: {
                async check() {
                    return await apiClient.get('/install/check');
                },
                async store(_, { form }) {
                    return await apiClient.post('/install', form);
                },
            },
        },
        wizard: {
            namespaced: true,
            state: () => ({ initURL: '/app/setup-wizard', formErrors: {} }),
            actions: {
                async getSteps() {
                    return await apiClient.get('/app/setup-wizard');
                },
            },
        },
    },
};
