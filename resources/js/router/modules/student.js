export default [
    // Main student list
    {
        path: 'students',
        name: 'Student',
        redirect: { name: 'StudentList' },
        children: [
            { path: '', name: 'StudentList', component: () => import('@/views/Pages/Student/Index.vue') },
            { path: ':uuid', name: 'StudentShow', component: () => import('@/views/Pages/Student/Show.vue') },
        ],
    },
    // Student detail sub-pages
    { path: 'students/:uuid/basic', name: 'StudentBasic', component: () => import('@/views/Pages/Student/Basic.vue') },
    { path: 'students/:uuid/contact', name: 'StudentContact', component: () => import('@/views/Pages/Student/Contact.vue') },
    { path: 'students/:uuid/login', name: 'StudentLogin', component: () => import('@/views/Pages/Student/Login.vue') },
    { path: 'students/:uuid/edit-basic', name: 'StudentEditBasic', component: () => import('@/views/Pages/Student/EditBasic.vue') },
    { path: 'students/:uuid/edit-contact', name: 'StudentEditContact', component: () => import('@/views/Pages/Student/EditContact.vue') },
    { path: 'students/:uuid/edit-login', name: 'StudentEditLogin', component: () => import('@/views/Pages/Student/EditLogin.vue') },
    { path: 'students/:uuid/edit-photo', name: 'StudentEditPhoto', component: () => import('@/views/Pages/Student/EditPhoto.vue') },
    { path: 'students/:uuid/exam-report', name: 'StudentExamReport', component: () => import('@/views/Pages/Student/ExamReport.vue') },
    { path: 'students/:uuid/attendance', name: 'StudentAttendanceDetail', component: () => import('@/views/Pages/Student/Attendance.vue') },
    { path: 'students/:uuid/subject', name: 'StudentSubjectDetail', component: () => import('@/views/Pages/Student/Subject.vue') },
    // Registrations
    {
        path: 'student/registrations',
        name: 'StudentRegistration',
        redirect: { name: 'StudentRegistrationList' },
        children: [
            { path: '', name: 'StudentRegistrationList', component: () => import('@/views/Pages/Student/Registration/Index.vue') },
            { path: 'create', name: 'StudentRegistrationCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Registration/Action.vue') },
            { path: ':uuid/edit', name: 'StudentRegistrationEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/Registration/Action.vue') },
            { path: 'wizard', name: 'StudentRegistrationWizard', component: () => import('@/views/Pages/Student/Registration/Wizard.vue') },
            { path: ':uuid/duplicate', name: 'StudentRegistrationDuplicate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Registration/Action.vue') },
            { path: ':uuid', name: 'StudentRegistrationShow', component: () => import('@/views/Pages/Student/Registration/Show.vue') },
        ],
    },
    // Timesheets
    {
        path: 'student/timesheets',
        name: 'StudentTimesheet',
        redirect: { name: 'StudentTimesheetList' },
        children: [
            { path: '', name: 'StudentTimesheetList', component: () => import('@/views/Pages/Student/Timesheet/Index.vue') },
            { path: 'create', name: 'StudentTimesheetCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Timesheet/Action.vue') },
            { path: 'batch', name: 'StudentTimesheetBatch', component: () => import('@/views/Pages/Student/Timesheet/Batch.vue') },
            { path: ':uuid/edit', name: 'StudentTimesheetEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/Timesheet/Action.vue') },
            { path: ':uuid', name: 'StudentTimesheetShow', component: () => import('@/views/Pages/Student/Timesheet/Show.vue') },
        ],
    },
    // Fee management
    { path: 'students/fee-allocations', name: 'StudentFeeAllocation', component: () => import('@/views/Pages/Student/FeeAllocation/Index.vue') },
    {
        path: 'students/custom-fees',
        name: 'StudentCustomFee',
        redirect: { name: 'StudentCustomFeeList' },
        children: [
            { path: '', name: 'StudentCustomFeeList', component: () => import('@/views/Pages/Student/CustomFee/Index.vue') },
            { path: 'create', name: 'StudentCustomFeeCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/CustomFee/Action.vue') },
            { path: ':uuid/edit', name: 'StudentCustomFeeEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/CustomFee/Action.vue') },
            { path: ':uuid', name: 'StudentCustomFeeShow', component: () => import('@/views/Pages/Student/CustomFee/Show.vue') },
        ],
    },
    {
        path: 'students/fee-refunds',
        name: 'StudentFeeRefund',
        redirect: { name: 'StudentFeeRefundList' },
        children: [
            { path: '', name: 'StudentFeeRefundList', component: () => import('@/views/Pages/Student/FeeRefund/Index.vue') },
            { path: 'create', name: 'StudentFeeRefundCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/FeeRefund/Action.vue') },
            { path: ':uuid/edit', name: 'StudentFeeRefundEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/FeeRefund/Action.vue') },
            { path: ':uuid', name: 'StudentFeeRefundShow', component: () => import('@/views/Pages/Student/FeeRefund/Show.vue') },
        ],
    },
    // Fee detail pages
    { path: 'students/:uuid/fee', name: 'StudentFee', component: () => import('@/views/Pages/Student/Fee/Index.vue') },
    { path: 'students/:uuid/fee/set', name: 'StudentFeeSet', component: () => import('@/views/Pages/Student/Fee/Set.vue') },
    { path: 'students/:uuid/fee/edit', name: 'StudentFeeEdit', component: () => import('@/views/Pages/Student/Fee/Edit.vue') },
    // Other student sub-modules
    { path: 'students/roll-numbers', name: 'StudentRollNumber', component: () => import('@/views/Pages/Student/RollNumber/Index.vue') },
    { path: 'students/photos', name: 'StudentPhoto', component: () => import('@/views/Pages/Student/Photo/Index.vue') },
    { path: 'students/health-records', name: 'StudentHealthRecord', component: () => import('@/views/Pages/Student/HealthRecord/Index.vue') },
    { path: 'students/subjects', name: 'StudentSubject', component: () => import('@/views/Pages/Student/Subject/Index.vue') },
    { path: 'students/attendance', name: 'StudentAttendance', component: () => import('@/views/Pages/Student/Attendance/Index.vue') },
    { path: 'students/attendance/absentee', name: 'StudentAttendanceAbsentee', component: () => import('@/views/Pages/Student/Attendance/Absentee.vue') },
    { path: 'students/promotions', name: 'StudentPromotion', component: () => import('@/views/Pages/Student/Promotion/Index.vue') },
    { path: 'students/siblings', name: 'StudentSibling', component: () => import('@/views/Pages/Student/Sibling/Index.vue') },
    { path: 'students/records', name: 'StudentRecord', component: () => import('@/views/Pages/Student/Record/Index.vue') },
    { path: 'students/service-allocations', name: 'StudentServiceAllocation', component: () => import('@/views/Pages/Student/ServiceAllocation/Index.vue') },
    { path: 'students/migrate-attendance', name: 'StudentMigrateAttendance', component: () => import('@/views/Pages/Student/MigrateAttendance.vue') },
    // Service requests, leave requests, transfers
    {
        path: 'student/service-requests',
        name: 'StudentServiceRequest',
        redirect: { name: 'StudentServiceRequestList' },
        children: [
            { path: '', name: 'StudentServiceRequestList', component: () => import('@/views/Pages/Student/ServiceRequest/Index.vue') },
            { path: 'create', name: 'StudentServiceRequestCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/ServiceRequest/Action.vue') },
            { path: ':uuid/edit', name: 'StudentServiceRequestEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/ServiceRequest/Action.vue') },
            { path: ':uuid', name: 'StudentServiceRequestShow', component: () => import('@/views/Pages/Student/ServiceRequest/Show.vue') },
        ],
    },
    {
        path: 'student/leave-requests',
        name: 'StudentLeaveRequest',
        redirect: { name: 'StudentLeaveRequestList' },
        children: [
            { path: '', name: 'StudentLeaveRequestList', component: () => import('@/views/Pages/Student/LeaveRequest/Index.vue') },
            { path: 'create', name: 'StudentLeaveRequestCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/LeaveRequest/Action.vue') },
            { path: ':uuid/edit', name: 'StudentLeaveRequestEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/LeaveRequest/Action.vue') },
            { path: ':uuid', name: 'StudentLeaveRequestShow', component: () => import('@/views/Pages/Student/LeaveRequest/Show.vue') },
        ],
    },
    {
        path: 'student/transfers',
        name: 'StudentTransfer',
        redirect: { name: 'StudentTransferList' },
        children: [
            { path: '', name: 'StudentTransferList', component: () => import('@/views/Pages/Student/Transfer/Index.vue') },
            { path: 'create', name: 'StudentTransferCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Transfer/Action.vue') },
            { path: ':uuid/edit', name: 'StudentTransferEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/Transfer/Action.vue') },
            { path: ':uuid', name: 'StudentTransferShow', component: () => import('@/views/Pages/Student/Transfer/Show.vue') },
        ],
    },
    { path: 'student/transfer/approval-requests', name: 'StudentTransferApprovalRequestList', component: () => import('@/views/Pages/Student/Transfer/ApprovalRequest/Index.vue') },
    {
        path: 'student/transfer-requests',
        name: 'StudentTransferRequest',
        redirect: { name: 'StudentTransferRequestList' },
        children: [
            { path: '', name: 'StudentTransferRequestList', component: () => import('@/views/Pages/Student/TransferRequest/Index.vue') },
            { path: 'create', name: 'StudentTransferRequestCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/TransferRequest/Action.vue') },
            { path: ':uuid/edit', name: 'StudentTransferRequestEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/TransferRequest/Action.vue') },
            { path: ':uuid', name: 'StudentTransferRequestShow', component: () => import('@/views/Pages/Student/TransferRequest/Show.vue') },
        ],
    },
    // Guardian, Dialogue, Documents, Qualifications, Accounts
    { path: 'students/:uuid/guardians', name: 'StudentGuardianList', component: () => import('@/views/Pages/Student/Guardian/Index.vue') },
    { path: 'students/:uuid/guardians/create', name: 'StudentGuardianCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Guardian/Action.vue') },
    {
        path: 'student/dialogues',
        name: 'StudentDialogue',
        redirect: { name: 'StudentDialogueList' },
        children: [
            { path: '', name: 'StudentDialogueList', component: () => import('@/views/Pages/Student/Dialogue/Index.vue') },
            { path: 'create', name: 'StudentDialogueCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Dialogue/Action.vue') },
            { path: ':uuid/edit', name: 'StudentDialogueEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Student/Dialogue/Action.vue') },
            { path: ':uuid', name: 'StudentDialogueShow', component: () => import('@/views/Pages/Student/Dialogue/Show.vue') },
        ],
    },
    {
        path: 'student/accounts',
        name: 'StudentAccounts',
        redirect: { name: 'StudentAccountsList' },
        children: [
            { path: '', name: 'StudentAccountsList', component: () => import('@/views/Pages/Student/Accounts/Index.vue') },
            { path: 'create', name: 'StudentAccountsCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Accounts/Action.vue') },
            { path: ':uuid', name: 'StudentAccountsShow', component: () => import('@/views/Pages/Student/Accounts/Show.vue') },
        ],
    },
    {
        path: 'student/documents',
        name: 'StudentDocuments',
        redirect: { name: 'StudentDocumentsList' },
        children: [
            { path: '', name: 'StudentDocumentsList', component: () => import('@/views/Pages/Student/Documents/Index.vue') },
            { path: 'create', name: 'StudentDocumentsCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Documents/Action.vue') },
            { path: ':uuid', name: 'StudentDocumentsShow', component: () => import('@/views/Pages/Student/Documents/Show.vue') },
        ],
    },
    {
        path: 'student/qualifications',
        name: 'StudentQualifications',
        redirect: { name: 'StudentQualificationsList' },
        children: [
            { path: '', name: 'StudentQualificationsList', component: () => import('@/views/Pages/Student/Qualifications/Index.vue') },
            { path: 'create', name: 'StudentQualificationsCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Qualifications/Action.vue') },
            { path: ':uuid', name: 'StudentQualificationsShow', component: () => import('@/views/Pages/Student/Qualifications/Show.vue') },
        ],
    },
    // Edit requests, profile edit requests
    { path: 'student/edit-requests', name: 'StudentEditRequestList', component: () => import('@/views/Pages/Student/EditRequest/Index.vue') },
    { path: 'student/edit-requests/:uuid', name: 'StudentEditRequestShow', component: () => import('@/views/Pages/Student/EditRequest/Show.vue') },
    {
        path: 'student/profile-edit-requests',
        name: 'StudentProfileEditRequest',
        redirect: { name: 'StudentProfileEditRequestList' },
        children: [
            { path: '', name: 'StudentProfileEditRequestList', component: () => import('@/views/Pages/Student/ProfileEditRequest/Index.vue') },
            { path: 'create', name: 'StudentProfileEditRequestCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/ProfileEditRequest/Action.vue') },
            { path: ':uuid', name: 'StudentProfileEditRequestShow', component: () => import('@/views/Pages/Student/ProfileEditRequest/Show.vue') },
        ],
    },
    // Config sub-modules
    {
        path: 'student/attendance-types',
        name: 'StudentConfigAttendanceType',
        redirect: { name: 'StudentConfigAttendanceTypeList' },
        children: [
            { path: '', name: 'StudentConfigAttendanceTypeList', component: () => import('@/views/Pages/Student/Config/AttendanceType/Index.vue') },
            { path: 'create', name: 'StudentConfigAttendanceTypeCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Config/AttendanceType/Action.vue') },
            { path: ':uuid', name: 'StudentConfigAttendanceTypeShow', component: () => import('@/views/Pages/Student/Config/AttendanceType/Show.vue') },
        ],
    },
    {
        path: 'student/document-types',
        name: 'StudentConfigDocumentType',
        redirect: { name: 'StudentConfigDocumentTypeList' },
        children: [
            { path: '', name: 'StudentConfigDocumentTypeList', component: () => import('@/views/Pages/Student/Config/DocumentType/Index.vue') },
            { path: 'create', name: 'StudentConfigDocumentTypeCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Student/Config/DocumentType/Action.vue') },
            { path: ':uuid', name: 'StudentConfigDocumentTypeShow', component: () => import('@/views/Pages/Student/Config/DocumentType/Show.vue') },
        ],
    },
    // Reports
    { path: 'student/reports/date-wise-attendance', name: 'StudentReportDateWiseAttendance', component: () => import('@/views/Pages/Student/Report/DateWiseAttendance/Index.vue') },
    { path: 'student/reports/batch-wise-attendance', name: 'StudentReportBatchWiseAttendance', component: () => import('@/views/Pages/Student/Report/BatchWiseAttendance/Index.vue') },
    { path: 'student/reports/subject-wise-attendance', name: 'StudentReportSubjectWiseAttendance', component: () => import('@/views/Pages/Student/Report/SubjectWiseAttendance/Index.vue') },
    { path: 'student/reports/subject-wise-student', name: 'StudentReportSubjectWiseStudent', component: () => import('@/views/Pages/Student/Report/SubjectWiseStudent/Index.vue') },
    { path: 'student/reports/daily-access-report', name: 'StudentReportDailyAccessReport', component: () => import('@/views/Pages/Student/Report/DailyAccessReport/Index.vue') },
    { path: 'student/reports', name: 'StudentReport', component: () => import('@/views/Pages/Student/Report/Index.vue') },
    // Attendance standalone
    { path: 'attendance', name: 'AttendanceAssistant', meta: { roles: ['admin', 'attendance-assistant'] }, component: () => import('@/views/Pages/Attendance/Assistant.vue') },
    { path: 'attendance/qr-code', name: 'AttendanceQrCode', component: () => import('@/views/Pages/Attendance/QrCode.vue') },
    // Config
    {
        path: 'student/config',
        name: 'StudentConfig',
        redirect: { name: 'StudentConfigGeneral' },
        children: [
            { path: 'general', name: 'StudentConfigGeneral', component: () => import('@/views/Pages/Student/Config/General.vue') },
        ],
    },
];
