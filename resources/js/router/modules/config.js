function crud(path, name, imp) {
    return { path, name, redirect: { name: `${name}List` }, children: [
        { path: '', name: `${name}List`, component: () => import(`../../views/Pages/${imp}/Index.vue`) },
        { path: 'create', name: `${name}Create`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid/edit', name: `${name}Edit`, meta: { action: 'edit' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid', name: `${name}Show`, component: () => import(`../../views/Pages/${imp}/Show.vue`) },
    ]};
}
export default [
    { path: 'config', name: 'Config', redirect: { name: 'ConfigGeneral' }, meta: { permissions: ['config:store'] }, children: [
        { path: 'general', name: 'ConfigGeneral', component: () => import('@/views/Pages/Config/General/Index.vue') },
        { path: 'asset', name: 'ConfigAsset', component: () => import('@/views/Pages/Config/Asset/Index.vue') },
        { path: 'system', name: 'ConfigSystem', component: () => import('@/views/Pages/Config/System/Index.vue') },
        { path: 'auth', name: 'ConfigAuth', component: () => import('@/views/Pages/Config/Auth/Index.vue') },
        { path: 'notification', name: 'ConfigNotification', component: () => import('@/views/Pages/Config/Notification/Index.vue') },
        { path: 'mail', name: 'ConfigMail', component: () => import('@/views/Pages/Config/Mail/Index.vue') },
        { path: 'sms', name: 'ConfigSMS', component: () => import('@/views/Pages/Config/SMS/Index.vue') },
        { path: 'whatsapp', name: 'ConfigWhatsApp', component: () => import('@/views/Pages/Config/WhatsApp/Index.vue') },
        { path: 'feature', name: 'ConfigFeature', component: () => import('@/views/Pages/Config/Feature/Index.vue') },
        { path: 'chat', name: 'ConfigChat', component: () => import('@/views/Pages/Config/Chat/Index.vue') },
        { path: 'social-network', name: 'ConfigSocialNetwork', component: () => import('@/views/Pages/Config/SocialNetwork/Index.vue') },
        { path: 'module', name: 'ConfigModule', component: () => import('@/views/Pages/Config/Module/Index.vue') },
    ]},
    crud('config/locale', 'ConfigLocale', 'Config/Locale'),
    crud('config/mail-template', 'ConfigMailTemplate', 'Config/MailTemplate'),
    { path: 'config/sms-template', name: 'ConfigSMSTemplate', redirect: { name: 'ConfigSMSTemplateList' }, children: [
        { path: '', name: 'ConfigSMSTemplateList', component: () => import('@/views/Pages/Config/SMSTemplate/Index.vue') },
        { path: 'create', name: 'ConfigSMSTemplateCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Config/SMSTemplate/Action.vue') },
        { path: ':uuid/edit', name: 'ConfigSMSTemplateEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Config/SMSTemplate/Action.vue') },
    ]},
    { path: 'config/whatsapp-template', name: 'ConfigWhatsAppTemplate', redirect: { name: 'ConfigWhatsAppTemplateList' }, children: [
        { path: '', name: 'ConfigWhatsAppTemplateList', component: () => import('@/views/Pages/Config/WhatsAppTemplate/Index.vue') },
        { path: 'create', name: 'ConfigWhatsAppTemplateCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Config/WhatsAppTemplate/Action.vue') },
        { path: ':uuid/edit', name: 'ConfigWhatsAppTemplateEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Config/WhatsAppTemplate/Action.vue') },
    ]},
    { path: 'config/push-notification-template', name: 'ConfigPushNotificationTemplate', redirect: { name: 'ConfigPushNotificationTemplateList' }, children: [
        { path: '', name: 'ConfigPushNotificationTemplateList', component: () => import('@/views/Pages/Config/PushNotificationTemplate/Index.vue') },
        { path: 'create', name: 'ConfigPushNotificationTemplateCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Config/PushNotificationTemplate/Action.vue') },
        { path: ':uuid/edit', name: 'ConfigPushNotificationTemplateEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Config/PushNotificationTemplate/Action.vue') },
    ]},
    // Custom fields, Options, Reminders
    crud('custom-fields', 'CustomField', 'CustomField'),
    { path: 'options', name: 'Option', redirect: { name: 'OptionList' }, children: [
        { path: '', name: 'OptionList', component: () => import('@/views/Pages/Option/Index.vue') },
        { path: 'create', name: 'OptionCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Option/Action.vue') },
    ]},
    crud('reminders', 'Reminder', 'Reminder'),
];
