import { crudActions, crudMutations, crudGetters } from '../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/employee/payrolls',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
