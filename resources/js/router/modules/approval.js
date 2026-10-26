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
    crud('approval/types', 'ApprovalType', 'Approval/Type'),
    { path: 'approval/requests', name: 'ApprovalRequest', redirect: { name: 'ApprovalRequestList' }, children: [
        { path: '', name: 'ApprovalRequestList', component: () => import('@/views/Pages/Approval/Request/Index.vue') },
        { path: 'create', name: 'ApprovalRequestCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Approval/Request/Action.vue') },
        { path: 'pending', name: 'ApprovalRequestPending', component: () => import('@/views/Pages/Approval/Request/Pending.vue') },
        { path: 'processed', name: 'ApprovalRequestProcessed', component: () => import('@/views/Pages/Approval/Request/Processed.vue') },
        { path: ':uuid/edit', name: 'ApprovalRequestEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Approval/Request/Action.vue') },
        { path: ':uuid', name: 'ApprovalRequestShow', component: () => import('@/views/Pages/Approval/Request/Show.vue') },
    ]},
    { path: 'approval/config', name: 'ApprovalConfig', redirect: { name: 'ApprovalConfigGeneral' }, children: [
        { path: 'general', name: 'ApprovalConfigGeneral', component: () => import('@/views/Pages/Approval/Config/General.vue') },
    ]},
];
