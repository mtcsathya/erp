function crud(path, name, importPath, opts = {}) {
    const children = [
        { path: '', name: `${name}List`, component: () => import(`../../views/Pages/${importPath}/Index.vue`) },
        { path: 'create', name: `${name}Create`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${importPath}/Action.vue`) },
        { path: ':uuid/edit', name: `${name}Edit`, meta: { action: 'edit' }, component: () => import(`../../views/Pages/${importPath}/Action.vue`) },
        { path: ':uuid/duplicate', name: `${name}Duplicate`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${importPath}/Action.vue`) },
        { path: ':uuid', name: `${name}Show`, component: () => import(`../../views/Pages/${importPath}/Show.vue`) },
    ];
    if (opts.hasAssign) {
        children.push({ path: 'assign', name: `${name}Assign`, component: () => import(`../../views/Pages/${importPath}/Assign.vue`) });
    }
    return { path, name, redirect: { name: `${name}List` }, children };
}

export default [
    crud('academic/departments', 'AcademicDepartment', 'Academic/Department'),
    crud('academic/department-incharges', 'AcademicDepartmentIncharge', 'Academic/DepartmentIncharge', { hasAssign: true }),
    crud('academic/program-types', 'AcademicProgramType', 'Academic/ProgramType'),
    crud('academic/programs', 'AcademicProgram', 'Academic/Program'),
    crud('academic/program-incharges', 'AcademicProgramIncharge', 'Academic/ProgramIncharge', { hasAssign: true }),
    crud('academic/sessions', 'AcademicSession', 'Academic/Session'),
    crud('academic/periods', 'AcademicPeriod', 'Academic/Period'),
    crud('academic/divisions', 'AcademicDivision', 'Academic/Division'),
    crud('academic/division-incharges', 'AcademicDivisionIncharge', 'Academic/DivisionIncharge', { hasAssign: true }),
    crud('academic/courses', 'AcademicCourse', 'Academic/Course'),
    crud('academic/course-incharges', 'AcademicCourseIncharge', 'Academic/CourseIncharge', { hasAssign: true }),
    crud('academic/enrollment-seats', 'AcademicEnrollmentSeat', 'Academic/EnrollmentSeat'),
    crud('academic/batches', 'AcademicBatch', 'Academic/Batch'),
    crud('academic/batch-incharges', 'AcademicBatchIncharge', 'Academic/BatchIncharge', { hasAssign: true }),
    crud('academic/subjects', 'AcademicSubject', 'Academic/Subject'),
    crud('academic/subject-incharges', 'AcademicSubjectIncharge', 'Academic/SubjectIncharge', { hasAssign: true }),
    crud('academic/class-timings', 'AcademicClassTiming', 'Academic/ClassTiming'),
    {
        path: 'academic/timetables',
        name: 'AcademicTimetable',
        redirect: { name: 'AcademicTimetableList' },
        children: [
            { path: '', name: 'AcademicTimetableList', component: () => import('@/views/Pages/Academic/Timetable/Index.vue') },
            { path: 'create', name: 'AcademicTimetableCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Academic/Timetable/Action.vue') },
            { path: ':uuid/edit', name: 'AcademicTimetableEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Academic/Timetable/Action.vue') },
            { path: ':uuid/duplicate', name: 'AcademicTimetableDuplicate', meta: { action: 'create' }, component: () => import('@/views/Pages/Academic/Timetable/Action.vue') },
            { path: ':uuid', name: 'AcademicTimetableShow', component: () => import('@/views/Pages/Academic/Timetable/Show.vue') },
            { path: 'allocation', name: 'AcademicTimetableAllocation', component: () => import('@/views/Pages/Academic/Timetable/Allocation.vue') },
        ],
    },
    { path: 'academic/timetable/teacher', name: 'AcademicTeacherTimetableIndex', component: () => import('@/views/Pages/Academic/Timetable/Teacher/Index.vue') },
    crud('academic/book-lists', 'AcademicBookList', 'Academic/BookList'),
    crud('academic/certificate-templates', 'AcademicCertificateTemplate', 'Academic/CertificateTemplate'),
    crud('academic/certificates', 'AcademicCertificate', 'Academic/Certificate'),
    crud('academic/id-card-templates', 'AcademicIdCardTemplate', 'Academic/IdCardTemplate'),
    { path: 'academic/id-cards', name: 'AcademicIdCard', component: () => import('@/views/Pages/Academic/IdCard/Print.vue') },
    {
        path: 'academic/config',
        name: 'AcademicConfig',
        redirect: { name: 'AcademicConfigGeneral' },
        children: [
            { path: 'general', name: 'AcademicConfigGeneral', component: () => import('@/views/Pages/Academic/Config/General.vue') },
        ],
    },
];
