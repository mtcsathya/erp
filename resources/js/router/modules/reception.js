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
    { path: 'reception/enquiries', name: 'ReceptionEnquiry', redirect: { name: 'ReceptionEnquiryList' }, children: [
        { path: '', name: 'ReceptionEnquiryList', component: () => import('@/views/Pages/Reception/Enquiry/Index.vue') },
        { path: 'create', name: 'ReceptionEnquiryCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Reception/Enquiry/Action.vue') },
        { path: 'wizard', name: 'ReceptionEnquiryWizard', component: () => import('@/views/Pages/Reception/Enquiry/Wizard.vue') },
        { path: ':uuid/edit', name: 'ReceptionEnquiryEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Reception/Enquiry/Action.vue') },
        { path: ':uuid/duplicate', name: 'ReceptionEnquiryDuplicate', meta: { action: 'create' }, component: () => import('@/views/Pages/Reception/Enquiry/Action.vue') },
        { path: ':uuid', name: 'ReceptionEnquiryShow', component: () => import('@/views/Pages/Reception/Enquiry/Show.vue') },
    ]},
    crud('reception/visitor-logs', 'ReceptionVisitorLog', 'Reception/VisitorLog'),
    crud('reception/gate-passes', 'ReceptionGatePass', 'Reception/GatePass'),
    crud('reception/complaints', 'ReceptionComplaint', 'Reception/Complaint'),
    crud('reception/call-logs', 'ReceptionCallLog', 'Reception/CallLog'),
    crud('reception/correspondences', 'ReceptionCorrespondence', 'Reception/Correspondence'),
    { path: 'reception/queries', name: 'ReceptionQueryList', component: () => import('@/views/Pages/Reception/Query/Index.vue') },
    { path: 'reception/queries/:uuid', name: 'ReceptionQueryShow', component: () => import('@/views/Pages/Reception/Query/Show.vue') },
    { path: 'reception/config', name: 'ReceptionConfig', redirect: { name: 'ReceptionConfigGeneral' }, children: [
        { path: 'general', name: 'ReceptionConfigGeneral', component: () => import('@/views/Pages/Reception/Config/General.vue') },
    ]},
];
