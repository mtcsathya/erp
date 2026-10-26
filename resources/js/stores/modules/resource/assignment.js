import { crudActions, crudMutations, crudGetters } from '../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/resource/assignments',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
