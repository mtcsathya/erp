import { apiClient } from '../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/notifications',
        notifications: [],
        unreadCount: 0,
    }),
    actions: {
        async list({ commit }, params = {}) {
            const data = await apiClient.get('/app/notifications', { params });
            commit('SET_NOTIFICATIONS', data.data || data.notifications || []);
            commit('SET_UNREAD_COUNT', data.unreadCount || 0);
            return data;
        },
        async markAsRead({ commit, dispatch }, { uuid }) {
            await apiClient.post(`/api/app/notifications/${uuid}/mark-as-read`);
            dispatch('list');
        },
        async markAllAsRead({ commit, dispatch }) {
            await apiClient.post('/app/notifications/mark-all-as-read');
            commit('SET_UNREAD_COUNT', 0);
            dispatch('list');
        },
    },
    mutations: {
        SET_NOTIFICATIONS(state, notifications) { state.notifications = notifications; },
        SET_UNREAD_COUNT(state, count) { state.unreadCount = count; },
    },
    getters: {
        notifications: (state) => state.notifications,
        unreadCount: (state) => state.unreadCount,
    },
};
