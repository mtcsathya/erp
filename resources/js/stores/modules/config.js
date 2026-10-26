import { apiClient } from '../helpers';
import lodash from 'lodash';

export default {
    namespaced: true,
    state: () => ({
        config: {
            auth: {},
            system: {},
            general: {},
        },
        isLoaded: false,
    }),
    actions: {
        async get({ commit }) {
            const data = await apiClient.get('/config');
            commit('SET_CONFIG', data);
            return data;
        },
        async store(_, { form }) {
            const data = await apiClient.post('/app/config', form);
            return data;
        },
        async modulePreRequisite(_, { module }) {
            const data = await apiClient.get(`/api/app/config/${module}/pre-requisite`);
            return data;
        },
    },
    mutations: {
        SET_CONFIG(state, data) {
            state.config = data;
            state.isLoaded = true;
        },
    },
    getters: {
        config: (state) => (key) => lodash.get(state.config, key),
        configs: (state) => state.config,
        isLoaded: (state) => state.isLoaded,
        system: (state) => state.config.system || {},
        requiresInstall: (state) => state.config?.system?.requiresInstall || false,
        isFeatureEnabled: (state) => (key) => lodash.get(state.config, key),
    },
    modules: {
        mailTemplate: { namespaced: true, state: () => ({ initURL: '/app/config/mail-templates', formErrors: {}, list: {} }) },
        smsTemplate: { namespaced: true, state: () => ({ initURL: '/app/config/sms-templates', formErrors: {}, list: {} }) },
        whatsappTemplate: { namespaced: true, state: () => ({ initURL: '/app/config/whatsapp-templates', formErrors: {}, list: {} }) },
        pushNotificationTemplate: { namespaced: true, state: () => ({ initURL: '/app/config/push-notification-templates', formErrors: {}, list: {} }) },
        locale: { namespaced: true, state: () => ({ initURL: '/app/config/locales', formErrors: {}, list: {} }) },
    },
};
