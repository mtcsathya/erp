export default {
    namespaced: true,
    state: () => ({
        navigations: [],
        configNavigations: [],
    }),
    actions: {
        setNavigation({ commit, rootGetters }) {
            const config = rootGetters['config/configs'];
            const modules = config?.modules || [];

            // Build navigation tree from config modules
            const navItems = modules
                .filter(m => m.isVisible !== false)
                .sort((a, b) => (a.position || 0) - (b.position || 0))
                .map(m => ({
                    name: m.name,
                    label: m.label || m.name,
                    icon: m.icon || 'fas fa-circle',
                    path: m.route || m.name,
                    children: m.children || [],
                    isVisible: m.isVisible !== false,
                }));

            commit('SET_NAVIGATIONS', navItems);

            // Config navigations
            const configNavs = modules
                .filter(m => m.hasConfig)
                .map(m => ({
                    name: m.name,
                    label: m.label || m.name,
                    icon: m.icon || 'fas fa-cog',
                    path: m.configRoute || `${m.name}Config`,
                }));

            commit('SET_CONFIG_NAVIGATIONS', configNavs);
        },
        resetNavigation({ commit }) {
            commit('SET_NAVIGATIONS', []);
            commit('SET_CONFIG_NAVIGATIONS', []);
        },
    },
    mutations: {
        SET_NAVIGATIONS(state, navs) { state.navigations = navs; },
        SET_CONFIG_NAVIGATIONS(state, navs) { state.configNavigations = navs; },
    },
    getters: {
        navigations: (state) => state.navigations,
        configNavigations: (state) => state.configNavigations,
    },
};
