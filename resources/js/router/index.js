import { createRouter, createWebHistory } from 'vue-router';
import { setupGuards } from './guard';

// Import modular route definitions
import authRoutes from './modules/auth';
import publicRoutes from './modules/public';
import dashboardRoutes from './modules/dashboard';
import academicRoutes from './modules/academic';
import studentRoutes from './modules/student';
import employeeRoutes from './modules/employee';
import financeRoutes from './modules/finance';
import examRoutes from './modules/exam';
import receptionRoutes from './modules/reception';
import resourceRoutes from './modules/resource';
import transportRoutes from './modules/transport';
import hostelRoutes from './modules/hostel';
import libraryRoutes from './modules/library';
import inventoryRoutes from './modules/inventory';
import communicationRoutes from './modules/communication';
import approvalRoutes from './modules/approval';
import helpdeskRoutes from './modules/helpdesk';
import taskRoutes from './modules/task';
import configRoutes from './modules/config';
import otherRoutes from './modules/other';

const routes = [
    // Guest Layout - login, register, password
    {
        path: '/',
        component: () => import('@/views/Layouts/Guest.vue'),
        meta: { belongsTo: 'guest' },
        redirect: { name: 'Login' },
        children: authRoutes,
    },

    // Blank Layout - public pages (jobs, online registration, payment)
    {
        path: '/',
        component: () => import('@/views/Layouts/Blank.vue'),
        meta: { belongsTo: 'blank' },
        children: publicRoutes,
    },

    // Empty Layout - team selection
    {
        path: '/',
        component: () => import('@/views/Layouts/Empty.vue'),
        meta: { belongsTo: 'auth' },
        children: [
            {
                path: 'team/selection',
                name: 'TeamSelection',
                component: () => import('@/views/Pages/Team/Selection.vue'),
            },
        ],
    },

    // App Layout - all authenticated routes
    {
        path: '/',
        component: () => import('@/views/Layouts/App.vue'),
        meta: { belongsTo: 'auth' },
        redirect: { name: 'Dashboard' },
        children: [
            ...dashboardRoutes,
            ...academicRoutes,
            ...studentRoutes,
            ...employeeRoutes,
            ...financeRoutes,
            ...examRoutes,
            ...receptionRoutes,
            ...resourceRoutes,
            ...transportRoutes,
            ...hostelRoutes,
            ...libraryRoutes,
            ...inventoryRoutes,
            ...communicationRoutes,
            ...approvalRoutes,
            ...helpdeskRoutes,
            ...taskRoutes,
            ...configRoutes,
            ...otherRoutes,
        ],
    },

    // Setup Layout - install wizard
    {
        path: '/',
        component: () => import('@/views/Layouts/Setup.vue'),
        meta: { belongsTo: 'setup' },
        children: [
            {
                path: 'install',
                name: 'Install',
                meta: { requiresInstall: true },
                component: () => import('@/views/Pages/Install/Index.vue'),
            },
        ],
    },

    // Error Layout
    {
        path: '/',
        component: () => import('@/views/Layouts/Error.vue'),
        meta: { belongsTo: 'setup' },
        children: [
            { path: 'error', name: 'ErrorGeneral', component: () => import('@/views/Pages/Errors/Index.vue') },
            { path: '401', name: 'Error401', component: () => import('@/views/Pages/Errors/401.vue') },
            { path: '403', name: 'Error403', component: () => import('@/views/Pages/Errors/403.vue') },
            { path: '404', name: 'Error404', component: () => import('@/views/Pages/Errors/404.vue') },
        ],
    },

    // Catch-all 404
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: { name: 'Error404' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

setupGuards(router);

export default router;
