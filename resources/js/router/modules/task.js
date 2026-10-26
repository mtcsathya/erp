export default [
    { path: 'task/dashboard', name: 'TaskDashboard', component: () => import('@/views/Pages/Task/Dashboard/Index.vue') },
    { path: 'tasks', name: 'Task', redirect: { name: 'TaskList' }, children: [
        { path: '', name: 'TaskList', component: () => import('@/views/Pages/Task/Index.vue') },
        { path: 'create', name: 'TaskCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Task/Action.vue') },
        { path: ':uuid', name: 'TaskShow', component: () => import('@/views/Pages/Task/Show.vue') },
        { path: ':uuid/general', name: 'TaskGeneral', component: () => import('@/views/Pages/Task/General.vue') },
        { path: ':uuid/checklists', name: 'TaskChecklist', component: () => import('@/views/Pages/Task/Checklist/Index.vue') },
        { path: ':uuid/members', name: 'TaskMember', component: () => import('@/views/Pages/Task/Member/Index.vue') },
        { path: ':uuid/media', name: 'TaskMedia', component: () => import('@/views/Pages/Task/Media/Index.vue') },
        { path: ':uuid/repeats', name: 'TaskRepeat', component: () => import('@/views/Pages/Task/Repeat/Index.vue') },
    ]},
    { path: 'task/config', name: 'TaskConfig', redirect: { name: 'TaskConfigGeneral' }, children: [
        { path: 'general', name: 'TaskConfigGeneral', component: () => import('@/views/Pages/Task/Config/General.vue') },
    ]},
];
