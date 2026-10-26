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
    { path: 'resource/diaries', name: 'ResourceDiary', redirect: { name: 'ResourceDiaryList' }, children: [
        { path: '', name: 'ResourceDiaryList', component: () => import('@/views/Pages/Resource/Diary/Index.vue') },
        { path: 'create', name: 'ResourceDiaryCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Resource/Diary/Action.vue') },
        { path: ':uuid/preview', name: 'ResourceDiaryPreview', component: () => import('@/views/Pages/Resource/Diary/Preview.vue') },
        { path: ':uuid/edit', name: 'ResourceDiaryEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Resource/Diary/Action.vue') },
        { path: ':uuid', name: 'ResourceDiaryShow', component: () => import('@/views/Pages/Resource/Diary/Show.vue') },
    ]},
    crud('resource/syllabuses', 'ResourceSyllabus', 'Resource/Syllabus'),
    crud('resource/lesson-plans', 'ResourceLessonPlan', 'Resource/LessonPlan'),
    crud('resource/assignments', 'ResourceAssignment', 'Resource/Assignment'),
    crud('resource/online-classes', 'ResourceOnlineClass', 'Resource/OnlineClass'),
    crud('resource/learning-materials', 'ResourceLearningMaterial', 'Resource/LearningMaterial'),
    crud('resource/downloads', 'ResourceDownload', 'Resource/Download'),
    { path: 'resource/book-lists', name: 'ResourceBookList', component: () => import('@/views/Pages/Resource/BookList/Index.vue') },
    { path: 'resource/reports', name: 'ResourceReport', component: () => import('@/views/Pages/Resource/Report/Index.vue') },
    { path: 'resource/reports/date-wise-student-diary', name: 'ResourceReportDateWiseStudentDiary', component: () => import('@/views/Pages/Resource/Report/DateWiseStudentDiary/Index.vue') },
    { path: 'resource/reports/date-wise-assignment', name: 'ResourceReportDateWiseAssignment', component: () => import('@/views/Pages/Resource/Report/DateWiseAssignment/Index.vue') },
    { path: 'resource/reports/date-wise-learning-material', name: 'ResourceReportDateWiseLearningMaterial', component: () => import('@/views/Pages/Resource/Report/DateWiseLearningMaterial/Index.vue') },
    { path: 'resource/config', name: 'ResourceConfig', redirect: { name: 'ResourceConfigGeneral' }, children: [
        { path: 'general', name: 'ResourceConfigGeneral', component: () => import('@/views/Pages/Resource/Config/General.vue') },
    ]},
];
