import { crudActions, crudMutations, crudGetters } from '../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/reminders',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
