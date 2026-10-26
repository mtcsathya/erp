function crud(path, name, imp) {
    return {
        path, name, redirect: { name: `${name}List` },
        children: [
            { path: '', name: `${name}List`, component: () => import(`../../views/Pages/${imp}/Index.vue`) },
            { path: 'create', name: `${name}Create`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
            { path: ':uuid/edit', name: `${name}Edit`, meta: { action: 'edit' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
            { path: ':uuid/duplicate', name: `${name}Duplicate`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
            { path: ':uuid', name: `${name}Show`, component: () => import(`../../views/Pages/${imp}/Show.vue`) },
        ],
    };
}

export default [
    { path: 'employees', name: 'Employee', redirect: { name: 'EmployeeList' }, children: [
        { path: '', name: 'EmployeeList', component: () => import('@/views/Pages/Employee/Index.vue') },
        { path: 'create', name: 'EmployeeCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Employee/Action.vue') },
        { path: ':uuid', name: 'EmployeeShow', component: () => import('@/views/Pages/Employee/Show.vue') },
    ]},
    // Employee detail sub-pages
    { path: 'employees/:uuid/basic', name: 'EmployeeBasic', component: () => import('@/views/Pages/Employee/Basic.vue') },
    { path: 'employees/:uuid/contact', name: 'EmployeeContact', component: () => import('@/views/Pages/Employee/Contact.vue') },
    { path: 'employees/:uuid/login', name: 'EmployeeLogin', component: () => import('@/views/Pages/Employee/Login.vue') },
    { path: 'employees/:uuid/edit-basic', name: 'EmployeeEditBasic', component: () => import('@/views/Pages/Employee/EditBasic.vue') },
    { path: 'employees/:uuid/edit-contact', name: 'EmployeeEditContact', component: () => import('@/views/Pages/Employee/EditContact.vue') },
    { path: 'employees/:uuid/edit-login', name: 'EmployeeEditLogin', component: () => import('@/views/Pages/Employee/EditLogin.vue') },
    { path: 'employees/:uuid/edit-photo', name: 'EmployeeEditPhoto', component: () => import('@/views/Pages/Employee/EditPhoto.vue') },
    crud('employee/departments', 'EmployeeDepartment', 'Employee/Department'),
    crud('employee/designations', 'EmployeeDesignation', 'Employee/Designation'),
    crud('employee/document-types', 'EmployeeConfigDocumentType', 'Employee/Config/DocumentType'),
    crud('employee/dialogues', 'EmployeeDialogue', 'Employee/Dialogue'),
    crud('employee/documents', 'EmployeeDocuments', 'Employee/Documents'),
    crud('employee/accounts', 'EmployeeAccounts', 'Employee/Accounts'),
    crud('employee/qualifications', 'EmployeeQualifications', 'Employee/Qualifications'),
    crud('employee/experiences', 'EmployeeExperiences', 'Employee/Experiences'),
    crud('employee/records', 'EmployeeRecord', 'Employee/Record'),
    crud('employee/work-shifts', 'EmployeeWorkShift', 'Employee/WorkShift'),
    { path: 'employee/edit-requests', name: 'EmployeeEditRequestList', component: () => import('@/views/Pages/Employee/EditRequest/Index.vue') },
    { path: 'employee/edit-requests/:uuid', name: 'EmployeeEditRequestShow', component: () => import('@/views/Pages/Employee/EditRequest/Show.vue') },
    { path: 'employee/incharges', name: 'EmployeeIncharge', component: () => import('@/views/Pages/Employee/Incharge/Index.vue') },
    // Attendance
    { path: 'employee/attendance', name: 'EmployeeAttendance', component: () => import('@/views/Pages/Employee/Attendance/Index.vue') },
    { path: 'employee/attendance/mark', name: 'EmployeeAttendanceMark', component: () => import('@/views/Pages/Employee/Attendance/Mark.vue') },
    { path: 'employee/attendance/mark-production', name: 'EmployeeAttendanceMarkProduction', component: () => import('@/views/Pages/Employee/Attendance/MarkProduction.vue') },
    crud('employee/attendance/types', 'EmployeeAttendanceType', 'Employee/Attendance/Type'),
    crud('employee/attendance/work-shifts', 'EmployeeAttendanceWorkShift', 'Employee/Attendance/WorkShift'),
    { path: 'employee/attendance/work-shifts/assign', name: 'EmployeeAttendanceWorkShiftAssign', component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Assign/Index.vue') },
    { path: 'employee/attendance/work-shifts/assign/report', name: 'EmployeeAttendanceWorkShiftAssignReport', component: () => import('@/views/Pages/Employee/Attendance/WorkShift/Assign/Report.vue') },
    crud('employee/attendance/timesheets', 'EmployeeAttendanceTimesheet', 'Employee/Attendance/Timesheet'),
    { path: 'employee/attendance/config', name: 'EmployeeAttendanceConfig', redirect: { name: 'EmployeeAttendanceConfigGeneral' }, children: [
        { path: 'general', name: 'EmployeeAttendanceConfigGeneral', component: () => import('@/views/Pages/Employee/Attendance/Config/General.vue') },
    ]},
    // Leave
    crud('employee/leave/types', 'EmployeeLeaveType', 'Employee/Leave/Type'),
    crud('employee/leave/allocations', 'EmployeeLeaveAllocation', 'Employee/Leave/Allocation'),
    crud('employee/leave/requests', 'EmployeeLeaveRequest', 'Employee/Leave/Request'),
    { path: 'employee/leave/config', name: 'EmployeeLeaveConfig', redirect: { name: 'EmployeeLeaveConfigGeneral' }, children: [
        { path: 'general', name: 'EmployeeLeaveConfigGeneral', component: () => import('@/views/Pages/Employee/Leave/Config/General.vue') },
    ]},
    // Payroll
    crud('employee/payroll/pay-heads', 'EmployeePayrollPayHead', 'Employee/Payroll/PayHead'),
    crud('employee/payroll/salary-templates', 'EmployeePayrollSalaryTemplate', 'Employee/Payroll/SalaryTemplate'),
    crud('employee/payroll/salary-structures', 'EmployeePayrollSalaryStructure', 'Employee/Payroll/SalaryStructure'),
    { path: 'employee/payroll/payrolls', name: 'EmployeePayroll', redirect: { name: 'EmployeePayrollList' }, children: [
        { path: '', name: 'EmployeePayrollList', component: () => import('@/views/Pages/Employee/Payroll/Index.vue') },
        { path: 'create', name: 'EmployeePayrollCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Employee/Payroll/Action.vue') },
        { path: ':uuid/process', name: 'EmployeePayrollProcess', component: () => import('@/views/Pages/Employee/Payroll/Process.vue') },
        { path: ':uuid/edit', name: 'EmployeePayrollEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Employee/Payroll/Action.vue') },
        { path: ':uuid', name: 'EmployeePayrollShow', component: () => import('@/views/Pages/Employee/Payroll/Show.vue') },
    ]},
    { path: 'employee/payroll/config', name: 'EmployeePayrollConfig', redirect: { name: 'EmployeePayrollConfigGeneral' }, children: [
        { path: 'general', name: 'EmployeePayrollConfigGeneral', component: () => import('@/views/Pages/Employee/Payroll/Config/General.vue') },
    ]},
    // Profile edit requests
    crud('employee/profile-edit-requests', 'EmployeeProfileEditRequest', 'Employee/ProfileEditRequest'),
    // Config
    { path: 'employee/config', name: 'EmployeeConfig', redirect: { name: 'EmployeeConfigGeneral' }, children: [
        { path: 'general', name: 'EmployeeConfigGeneral', component: () => import('@/views/Pages/Employee/Config/General.vue') },
    ]},
];
