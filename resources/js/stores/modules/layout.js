export default {
    namespaced: true,
    state: () => ({
        sidebar: {
            mobile: false,
            type: 'mini', // 'mini', 'full', 'pinned'
        },
        display: 'light', // 'light', 'dark'
    }),
    actions: {
        setMobileSidebar({ commit }, val) {
            commit('SET_MOBILE_SIDEBAR', val);
        },
        setSidebarType({ commit }, type) {
            commit('SET_SIDEBAR_TYPE', type);
        },
        setDisplay({ commit }, display) {
            commit('SET_DISPLAY', display);
            if (display === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },
        setLayout({ commit }, config) {
            if (config?.display) {
                commit('SET_DISPLAY', config.display);
                if (config.display === 'dark') {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            }
            if (config?.sidebar) {
                commit('SET_SIDEBAR_TYPE', config.sidebar);
            }
        },
        setUserLayout({ dispatch }, preferences) {
            dispatch('setLayout', preferences);
        },
        resetState({ commit }) {
            commit('SET_MOBILE_SIDEBAR', false);
            commit('SET_SIDEBAR_TYPE', 'mini');
        },
    },
    mutations: {
        SET_MOBILE_SIDEBAR(state, val) { state.sidebar.mobile = val; },
        SET_SIDEBAR_TYPE(state, type) { state.sidebar.type = type; },
        SET_DISPLAY(state, display) { state.display = display; },
    },
    getters: {
        getSidebarType: (state) => state.sidebar.type,
        getMobileSidebar: (state) => state.sidebar.mobile,
        getDisplay: (state) => state.display,
    },
};
