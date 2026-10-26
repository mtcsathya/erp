function crud(path, name, imp) {
    return { path, name, redirect: { name: `${name}List` }, children: [
        { path: '', name: `${name}List`, component: () => import(`../../views/Pages/${imp}/Index.vue`) },
        { path: 'create', name: `${name}Create`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid/edit', name: `${name}Edit`, meta: { action: 'edit' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid/duplicate', name: `${name}Duplicate`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid', name: `${name}Show`, component: () => import(`../../views/Pages/${imp}/Show.vue`) },
    ]};
}
export default [
    crud('helpdesk/faqs', 'HelpdeskFaq', 'Helpdesk/Faq'),
    crud('helpdesk/tickets', 'HelpdeskTicket', 'Helpdesk/Ticket'),
    { path: 'helpdesk/config', name: 'HelpdeskConfig', redirect: { name: 'HelpdeskConfigGeneral' }, children: [
        { path: 'general', name: 'HelpdeskConfigGeneral', component: () => import('@/views/Pages/Helpdesk/Config/General.vue') },
    ]},
];
