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
    // Organization
    crud('organizations', 'Organization', 'Organization'),
    // Team
    { path: 'teams', name: 'Team', redirect: { name: 'TeamList' }, meta: { permissions: ['team:manage'] }, children: [
        { path: '', name: 'TeamList', component: () => import('@/views/Pages/Team/Index.vue') },
        { path: 'create', name: 'TeamCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Team/Action.vue') },
        { path: ':uuid/edit', name: 'TeamEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Team/Action.vue') },
        { path: ':uuid', name: 'TeamShow', component: () => import('@/views/Pages/Team/Show.vue') },
        { path: ':uuid/config', name: 'TeamConfig', redirect: { name: 'TeamConfigGeneral' }, children: [
            { path: 'general', name: 'TeamConfigGeneral', component: () => import('@/views/Pages/Team/Config/General/Index.vue') },
            { path: 'asset', name: 'TeamConfigAsset', component: () => import('@/views/Pages/Team/Config/Asset/Index.vue') },
            { path: 'role', name: 'TeamConfigRole', redirect: { name: 'TeamConfigRoleList' }, children: [
                { path: '', name: 'TeamConfigRoleList', component: () => import('@/views/Pages/Team/Config/Role/Index.vue') },
                { path: 'create', name: 'TeamConfigRoleCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Team/Config/Role/Action.vue') },
            ]},
            { path: 'permission', name: 'TeamConfigPermission', component: () => import('@/views/Pages/Team/Config/Permission/Index.vue') },
            { path: 'user-permission', name: 'TeamConfigUserPermission', component: () => import('@/views/Pages/Team/Config/Permission/User.vue') },
        ]},
    ]},
    // Chat
    { path: 'chat', name: 'Chat', meta: { feature: 'chat.enableChat', permissions: ['chat:access'] }, component: () => import('@/views/Pages/Chat/Index.vue') },
    { path: 'chat/:uuid', name: 'ChatMessage', component: () => import('@/views/Pages/Chat/Message.vue') },
    // Calendar
    crud('calendar/holidays', 'CalendarHoliday', 'Calendar/Holiday'),
    { path: 'calendar/celebrations', name: 'CalendarCelebration', component: () => import('@/views/Pages/Calendar/Celebration/Index.vue') },
    crud('calendar/events', 'CalendarEvent', 'Calendar/Event'),
    { path: 'calendar/config', name: 'CalendarConfig', redirect: { name: 'CalendarConfigGeneral' }, children: [
        { path: 'general', name: 'CalendarConfigGeneral', component: () => import('@/views/Pages/Calendar/Config/General.vue') },
    ]},
    // Discipline
    crud('discipline/incidents', 'DisciplineIncident', 'Discipline/Incident'),
    { path: 'discipline/config', name: 'DisciplineConfig', redirect: { name: 'DisciplineConfigGeneral' }, children: [
        { path: 'general', name: 'DisciplineConfigGeneral', component: () => import('@/views/Pages/Discipline/Config/General.vue') },
    ]},
    // Gallery
    crud('galleries', 'Gallery', 'Gallery'),
    { path: 'gallery/config', name: 'GalleryConfig', redirect: { name: 'GalleryConfigGeneral' }, children: [
        { path: 'general', name: 'GalleryConfigGeneral', component: () => import('@/views/Pages/Gallery/Config/General.vue') },
    ]},
    // Mess
    crud('mess/menu-items', 'MessMenuItem', 'Mess/MenuItem'),
    crud('mess/meals', 'MessMeal', 'Mess/Meal'),
    crud('mess/meal-logs', 'MessMealLog', 'Mess/MealLog'),
    { path: 'mess/config', name: 'MessConfig', redirect: { name: 'MessConfigGeneral' }, children: [
        { path: 'general', name: 'MessConfigGeneral', component: () => import('@/views/Pages/Mess/Config/General.vue') },
    ]},
    // Activity
    { path: 'activity/trips', name: 'ActivityTrip', redirect: { name: 'ActivityTripList' }, children: [
        { path: '', name: 'ActivityTripList', component: () => import('@/views/Pages/Activity/Trip/Index.vue') },
        { path: 'create', name: 'ActivityTripCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Activity/Trip/Action.vue') },
        { path: ':uuid/edit', name: 'ActivityTripEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Activity/Trip/Action.vue') },
        { path: ':uuid', name: 'ActivityTripShow', component: () => import('@/views/Pages/Activity/Trip/Show.vue') },
        { path: ':uuid/general', name: 'ActivityTripGeneral', component: () => import('@/views/Pages/Activity/Trip/General.vue') },
        { path: ':uuid/participants', name: 'ActivityTripParticipant', component: () => import('@/views/Pages/Activity/Trip/Participant/Index.vue') },
        { path: ':uuid/media', name: 'ActivityTripMedia', component: () => import('@/views/Pages/Activity/Trip/Media/Index.vue') },
    ]},
    { path: 'activity/config', name: 'ActivityConfig', redirect: { name: 'ActivityConfigGeneral' }, children: [
        { path: 'general', name: 'ActivityConfigGeneral', component: () => import('@/views/Pages/Activity/Config/General.vue') },
    ]},
    // Blog & News & Post
    { path: 'blogs', name: 'Blog', redirect: { name: 'BlogList' }, children: [
        { path: '', name: 'BlogList', component: () => import('@/views/Pages/Blog/Index.vue') },
        { path: 'create', name: 'BlogCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Blog/Action.vue') },
        { path: ':uuid/edit', name: 'BlogEdit', component: () => import('@/views/Pages/Blog/Edit.vue') },
        { path: ':uuid', name: 'BlogShow', component: () => import('@/views/Pages/Blog/Show.vue') },
    ]},
    { path: 'blog/config', name: 'BlogConfig', redirect: { name: 'BlogConfigGeneral' }, children: [
        { path: 'general', name: 'BlogConfigGeneral', component: () => import('@/views/Pages/Blog/Config/General.vue') },
    ]},
    { path: 'news', name: 'News', redirect: { name: 'NewsList' }, children: [
        { path: '', name: 'NewsList', component: () => import('@/views/Pages/News/Index.vue') },
        { path: 'create', name: 'NewsCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/News/Action.vue') },
        { path: ':uuid/edit', name: 'NewsEdit', component: () => import('@/views/Pages/News/Edit.vue') },
        { path: ':uuid', name: 'NewsShow', component: () => import('@/views/Pages/News/Show.vue') },
    ]},
    { path: 'news/config', name: 'NewsConfig', redirect: { name: 'NewsConfigGeneral' }, children: [
        { path: 'general', name: 'NewsConfigGeneral', component: () => import('@/views/Pages/News/Config/General.vue') },
    ]},
    { path: 'posts', name: 'Post', meta: { feature: 'feature.enablePost' }, redirect: { name: 'PostList' }, children: [
        { path: '', name: 'PostList', component: () => import('@/views/Pages/Post/Index.vue') },
        { path: ':uuid/edit', name: 'PostEdit', component: () => import('@/views/Pages/Post/Edit.vue') },
        { path: ':uuid', name: 'PostShow', component: () => import('@/views/Pages/Post/Show.vue') },
    ]},
    { path: 'post/config', name: 'PostConfig', redirect: { name: 'PostConfigGeneral' }, children: [
        { path: 'general', name: 'PostConfigGeneral', component: () => import('@/views/Pages/Post/Config/General.vue') },
    ]},
    // Recruitment
    crud('recruitment/vacancies', 'RecruitmentVacancy', 'Recruitment/Vacancy'),
    { path: 'recruitment/applications', name: 'RecruitmentApplication', redirect: { name: 'RecruitmentApplicationList' }, children: [
        { path: '', name: 'RecruitmentApplicationList', component: () => import('@/views/Pages/Recruitment/Application/Index.vue') },
        { path: 'create', name: 'RecruitmentApplicationCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Recruitment/Application/Action.vue') },
        { path: ':uuid/edit', name: 'RecruitmentApplicationEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Recruitment/Application/Action.vue') },
        { path: ':uuid', name: 'RecruitmentApplicationShow', component: () => import('@/views/Pages/Recruitment/Application/Show.vue') },
    ]},
    { path: 'recruitment/config', name: 'RecruitmentConfig', redirect: { name: 'RecruitmentConfigGeneral' }, children: [
        { path: 'general', name: 'RecruitmentConfigGeneral', component: () => import('@/views/Pages/Recruitment/Config/General.vue') },
    ]},
    // Form
    { path: 'forms', name: 'Form', redirect: { name: 'FormList' }, children: [
        { path: '', name: 'FormList', component: () => import('@/views/Pages/Form/Index.vue') },
        { path: 'create', name: 'FormCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Form/Action.vue') },
        { path: ':uuid/edit', name: 'FormEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Form/Action.vue') },
        { path: ':uuid', name: 'FormShow', component: () => import('@/views/Pages/Form/Show.vue') },
        { path: ':uuid/submit', name: 'FormSubmit', component: () => import('@/views/Pages/Form/Submit.vue') },
        { path: ':uuid/submissions', name: 'FormSubmissionList', component: () => import('@/views/Pages/Form/Submission/Index.vue') },
        { path: ':uuid/submissions/:submissionUuid', name: 'FormSubmissionShow', component: () => import('@/views/Pages/Form/Submission/Show.vue') },
    ]},
    { path: 'form/config', name: 'FormConfig', redirect: { name: 'FormConfigGeneral' }, children: [
        { path: 'general', name: 'FormConfigGeneral', component: () => import('@/views/Pages/Form/Config/General.vue') },
    ]},
    // Asset (Building)
    crud('asset/building/blocks', 'AssetBuildingBlock', 'Asset/Building/Block'),
    crud('asset/building/floors', 'AssetBuildingFloor', 'Asset/Building/Floor'),
    crud('asset/building/rooms', 'AssetBuildingRoom', 'Asset/Building/Room'),
    // Guardian
    { path: 'guardians', name: 'Guardian', redirect: { name: 'GuardianList' }, children: [
        { path: '', name: 'GuardianList', component: () => import('@/views/Pages/Guardian/Index.vue') },
        { path: ':uuid', name: 'GuardianShow', component: () => import('@/views/Pages/Guardian/Show.vue') },
    ]},
    { path: 'guardians/:uuid/basic', name: 'GuardianBasic', component: () => import('@/views/Pages/Guardian/Basic.vue') },
    { path: 'guardians/:uuid/contact', name: 'GuardianContact', component: () => import('@/views/Pages/Guardian/Contact.vue') },
    { path: 'guardians/:uuid/login', name: 'GuardianLogin', component: () => import('@/views/Pages/Guardian/Login.vue') },
    { path: 'guardians/:uuid/edit-basic', name: 'GuardianEditBasic', component: () => import('@/views/Pages/Guardian/EditBasic.vue') },
    { path: 'guardians/:uuid/edit-contact', name: 'GuardianEditContact', component: () => import('@/views/Pages/Guardian/EditContact.vue') },
    { path: 'guardians/:uuid/edit-login', name: 'GuardianEditLogin', component: () => import('@/views/Pages/Guardian/EditLogin.vue') },
    { path: 'guardians/:uuid/edit-photo', name: 'GuardianEditPhoto', component: () => import('@/views/Pages/Guardian/EditPhoto.vue') },
    { path: 'guardian/config', name: 'GuardianConfig', redirect: { name: 'GuardianConfigGeneral' }, children: [
        { path: 'general', name: 'GuardianConfigGeneral', component: () => import('@/views/Pages/Guardian/Config/General.vue') },
    ]},
    // Contact
    { path: 'contacts', name: 'Contact', redirect: { name: 'ContactList' }, children: [
        { path: '', name: 'ContactList', component: () => import('@/views/Pages/Contact/Index.vue') },
        { path: 'create', name: 'ContactCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Contact/Action.vue') },
        { path: ':uuid', name: 'ContactShow', component: () => import('@/views/Pages/Contact/Show.vue') },
    ]},
    { path: 'contacts/:uuid/basic', name: 'ContactBasic', component: () => import('@/views/Pages/Contact/Basic.vue') },
    { path: 'contacts/:uuid/contact', name: 'ContactContact', component: () => import('@/views/Pages/Contact/Contact.vue') },
    { path: 'contacts/:uuid/login', name: 'ContactLogin', component: () => import('@/views/Pages/Contact/Login.vue') },
    { path: 'contacts/:uuid/edit-basic', name: 'ContactEditBasic', component: () => import('@/views/Pages/Contact/EditBasic.vue') },
    { path: 'contacts/:uuid/edit-contact', name: 'ContactEditContact', component: () => import('@/views/Pages/Contact/EditContact.vue') },
    { path: 'contacts/:uuid/edit-login', name: 'ContactEditLogin', component: () => import('@/views/Pages/Contact/EditLogin.vue') },
    { path: 'contacts/:uuid/edit-photo', name: 'ContactEditPhoto', component: () => import('@/views/Pages/Contact/EditPhoto.vue') },
    crud('contact/document-types', 'ContactConfigDocumentType', 'Contact/Config/DocumentType'),
    { path: 'contact/config', name: 'ContactConfig', redirect: { name: 'ContactConfigGeneral' }, children: [
        { path: 'general', name: 'ContactConfigGeneral', component: () => import('@/views/Pages/Contact/Config/General.vue') },
    ]},
    // Device
    crud('devices', 'Device', 'Device'),
    // Site (CMS)
    crud('site/pages', 'SitePage', 'Site/Page'),
    crud('site/menus', 'SiteMenu', 'Site/Menu'),
    crud('site/blocks', 'SiteBlock', 'Site/Block'),
    { path: 'site/config', name: 'SiteConfig', redirect: { name: 'SiteConfigGeneral' }, children: [
        { path: 'general', name: 'SiteConfigGeneral', component: () => import('@/views/Pages/Site/Config/General.vue') },
    ]},
    // Utility
    crud('utility/todos', 'UtilityTodo', 'Utility/Todo'),
    { path: 'utility/backups', name: 'UtilityBackup', component: () => import('@/views/Pages/Utility/Backup/Index.vue') },
    { path: 'utility/activity-logs', name: 'UtilityActivityLog', component: () => import('@/views/Pages/Utility/ActivityLog/Index.vue') },
    { path: 'utility/config', name: 'UtilityConfig', redirect: { name: 'UtilityConfigGeneral' }, children: [
        { path: 'general', name: 'UtilityConfigGeneral', component: () => import('@/views/Pages/Utility/Config/General.vue') },
    ]},
];
