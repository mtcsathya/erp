import { crudActions, crudMutations, crudGetters } from '../../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/asset/building/floors',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
