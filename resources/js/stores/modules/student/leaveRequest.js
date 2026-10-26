import { crudActions, crudMutations, crudGetters } from '../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/student/leave-requests',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
