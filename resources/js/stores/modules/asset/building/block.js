import { crudActions, crudMutations, crudGetters } from '../../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/asset/building/blocks',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
