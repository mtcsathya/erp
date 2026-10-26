export default [
    { path: 'home', name: 'Home', meta: { feature: 'feature.enablePost' }, component: () => import('@/views/Pages/Post/Index.vue') },
    { path: 'dashboard', name: 'Dashboard', component: () => import('@/views/Pages/Dashboard/Index.vue') },
    { path: 'notifications', name: 'Notification', component: () => import('@/views/Pages/Notification/Index.vue') },
    { path: 'support', name: 'Support', meta: { superAdmin: true }, component: () => import('@/views/Pages/Support/Index.vue') },
    { path: 'bulk-upload/action', name: 'BulkUploadAction', meta: { roles: ['admin'] }, component: () => import('@/views/Pages/General/BulkUpload/Action.vue') },
    { path: 'product', name: 'Product', meta: { roles: ['admin'] }, component: () => import('@/views/Pages/Product/Index.vue') },
    { path: 'license', name: 'License', component: () => import('@/views/Pages/Product/License.vue') },
    // User profile
    { path: 'user/force-change-password', name: 'UserForceChangePassword', component: () => import('@/views/Pages/User/ForceChangePassword.vue') },
    {
        path: 'user',
        name: 'Profile',
        redirect: { name: 'UserProfile' },
        children: [
            { path: 'profile', name: 'UserProfile', component: () => import('@/views/Pages/User/Profile/Index.vue') },
            { path: 'account', name: 'UserAccount', component: () => import('@/views/Pages/User/Profile/Account.vue') },
            { path: 'avatar', name: 'UserAvatar', component: () => import('@/views/Pages/User/Profile/Avatar.vue') },
            { path: 'preference', name: 'UserPreference', component: () => import('@/views/Pages/User/Profile/Preference.vue') },
            { path: 'password', name: 'UserPassword', component: () => import('@/views/Pages/User/Profile/Password.vue') },
        ],
    },
    // User management
    {
        path: 'users',
        name: 'User',
        redirect: { name: 'UserList' },
        meta: { permissions: ['user:read'] },
        children: [
            { path: '', name: 'UserList', component: () => import('@/views/Pages/User/Index.vue') },
            { path: 'create', name: 'UserCreate', meta: { action: 'create', permissions: ['user:create'] }, component: () => import('@/views/Pages/User/Action.vue') },
            { path: ':uuid/edit', name: 'UserEdit', meta: { action: 'edit', permissions: ['user:edit'] }, component: () => import('@/views/Pages/User/Action.vue') },
            { path: ':uuid', name: 'UserShow', component: () => import('@/views/Pages/User/Show.vue') },
        ],
    },
];
