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
    crud('communication/announcements', 'CommunicationAnnouncement', 'Communication/Announcement'),
    crud('communication/emails', 'CommunicationEmail', 'Communication/Email'),
    crud('communication/sms', 'CommunicationSMS', 'Communication/SMS'),
    crud('communication/whatsapp', 'CommunicationWhatsApp', 'Communication/WhatsApp'),
    crud('communication/push-messages', 'CommunicationPushMessage', 'Communication/PushMessage'),
    { path: 'communication/config', name: 'CommunicationConfig', redirect: { name: 'CommunicationConfigGeneral' }, children: [
        { path: 'general', name: 'CommunicationConfigGeneral', component: () => import('@/views/Pages/Communication/Config/General.vue') },
    ]},
];
