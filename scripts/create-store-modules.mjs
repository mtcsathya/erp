import fs from 'fs';
import path from 'path';

// All store modules and their API URLs
const modules = {
    // Core
    'config.js': '/app/config',
    'dashboard.js': '/app/dashboard',
    'user.js': '/app/users',
    'team.js': '/app/teams',
    'chat.js': '/app/chats',
    'customField.js': '/app/custom-fields',
    'option.js': '/app/options',
    'tag.js': '/app/tags',
    'notification.js': '/app/notifications',
    'organization.js': '/app/organizations',
    'reminder.js': '/app/reminders',
    'device.js': '/app/devices',
    'form.js': '/app/forms',
    'blog.js': '/app/blogs',
    'gallery.js': '/app/galleries',

    // Academic
    'academic/department.js': '/app/academic/departments',
    'academic/program.js': '/app/academic/programs',
    'academic/programType.js': '/app/academic/program-types',
    'academic/period.js': '/app/academic/periods',
    'academic/course.js': '/app/academic/courses',
    'academic/batch.js': '/app/academic/batches',
    'academic/division.js': '/app/academic/divisions',
    'academic/subject.js': '/app/academic/subjects',
    'academic/session.js': '/app/academic/sessions',
    'academic/classTiming.js': '/app/academic/class-timings',
    'academic/timetable.js': '/app/academic/timetables',
    'academic/certificate.js': '/app/academic/certificates',
    'academic/certificateTemplate.js': '/app/academic/certificate-templates',
    'academic/idCardTemplate.js': '/app/academic/id-card-templates',
    'academic/bookList.js': '/app/academic/book-lists',
    'academic/enrollmentSeat.js': '/app/academic/enrollment-seats',

    // Student
    'student/registration.js': '/app/students/registrations',
    'student/rollNumber.js': '/app/students/roll-numbers',
    'student/healthRecord.js': '/app/students/health-records',
    'student/subject.js': '/app/students/subjects',
    'student/attendance.js': '/app/students/attendance',
    'student/feeAllocation.js': '/app/students/fee-allocations',
    'student/customFee.js': '/app/students/custom-fees',
    'student/feeRefund.js': '/app/students/fee-refunds',
    'student/promotion.js': '/app/students/promotions',
    'student/transfer.js': '/app/students/transfers',
    'student/leaveRequest.js': '/app/students/leave-requests',
    'student/document.js': '/app/students/documents',
    'student/qualification.js': '/app/students/qualifications',
    'student/account.js': '/app/students/accounts',
    'student/onlineRegistration.js': '/app/students/online-registrations',
    'student/guestPayment.js': '/app/students/guest-payments',
    'student/serviceRequest.js': '/app/students/service-requests',
    'student/serviceAllocation.js': '/app/students/service-allocations',
    'student/timesheet.js': '/app/students/timesheets',
    'student/dialogue.js': '/app/students/dialogues',
    'student/transferCertificate.js': '/app/students/transfer-certificates',
    'student/attendanceType.js': '/app/students/attendance-types',
    'student/documentType.js': '/app/students/document-types',

    // Employee
    'employee/department.js': '/app/employees/departments',
    'employee/designation.js': '/app/employees/designations',
    'employee/record.js': '/app/employees/records',
    'employee/document.js': '/app/employees/documents',
    'employee/qualification.js': '/app/employees/qualifications',
    'employee/experience.js': '/app/employees/experiences',
    'employee/account.js': '/app/employees/accounts',
    'employee/attendance.js': '/app/employees/attendance',
    'employee/attendanceType.js': '/app/employees/attendance-types',
    'employee/workShift.js': '/app/employees/work-shifts',
    'employee/timesheet.js': '/app/employees/timesheets',
    'employee/leaveType.js': '/app/employees/leave-types',
    'employee/leaveAllocation.js': '/app/employees/leave-allocations',
    'employee/leaveRequest.js': '/app/employees/leave-requests',
    'employee/payHead.js': '/app/employees/pay-heads',
    'employee/salaryStructure.js': '/app/employees/salary-structures',
    'employee/salaryTemplate.js': '/app/employees/salary-templates',
    'employee/payroll.js': '/app/employees/payrolls',
    'employee/dialogue.js': '/app/employees/dialogues',
    'employee/documentType.js': '/app/employees/document-types',

    // Finance
    'finance/ledgerType.js': '/app/finance/ledger-types',
    'finance/ledger.js': '/app/finance/ledgers',
    'finance/feeGroup.js': '/app/finance/fee-groups',
    'finance/feeHead.js': '/app/finance/fee-heads',
    'finance/feeStructure.js': '/app/finance/fee-structures',
    'finance/feeConcession.js': '/app/finance/fee-concessions',
    'finance/paymentMethod.js': '/app/finance/payment-methods',
    'finance/transaction.js': '/app/finance/transactions',
    'finance/dayClosure.js': '/app/finance/day-closures',
    'finance/feeComponent.js': '/app/finance/fee-components',
    'finance/feeStructureComponent.js': '/app/finance/fee-structure-components',
    'finance/receipt.js': '/app/finance/receipts',
    'finance/tax.js': '/app/finance/taxes',

    // Exam
    'exam/term.js': '/app/exams/terms',
    'exam/grade.js': '/app/exams/grades',
    'exam/assessment.js': '/app/exams/assessments',
    'exam/observation.js': '/app/exams/observations',
    'exam/schedule.js': '/app/exams/schedules',
    'exam/onlineExam.js': '/app/exams/online-exams',
    'exam/competency.js': '/app/exams/competencies',

    // Reception
    'reception/enquiry.js': '/app/reception/enquiries',
    'reception/visitorLog.js': '/app/reception/visitor-logs',
    'reception/gatePass.js': '/app/reception/gate-passes',
    'reception/complaint.js': '/app/reception/complaints',
    'reception/callLog.js': '/app/reception/call-logs',
    'reception/correspondence.js': '/app/reception/correspondences',

    // Resource
    'resource/assignment.js': '/app/resources/assignments',
    'resource/diary.js': '/app/resources/diaries',
    'resource/lessonPlan.js': '/app/resources/lesson-plans',
    'resource/syllabus.js': '/app/resources/syllabuses',
    'resource/onlineClass.js': '/app/resources/online-classes',
    'resource/learningMaterial.js': '/app/resources/learning-materials',
    'resource/download.js': '/app/resources/downloads',

    // Transport
    'transport/circle.js': '/app/transports/circles',
    'transport/route.js': '/app/transports/routes',
    'transport/stoppage.js': '/app/transports/stoppages',
    'transport/fee.js': '/app/transports/fees',
    'transport/vehicle.js': '/app/transports/vehicles',

    // Hostel
    'hostel/block.js': '/app/hostels/blocks',
    'hostel/floor.js': '/app/hostels/floors',
    'hostel/room.js': '/app/hostels/rooms',
    'hostel/roomAllocation.js': '/app/hostels/room-allocations',
    'hostel/blockIncharge.js': '/app/hostels/block-incharges',

    // Library
    'library/book.js': '/app/library/books',
    'library/bookAddition.js': '/app/library/book-additions',
    'library/transaction.js': '/app/library/transactions',
    'library/bookCopy.js': '/app/library/book-copies',

    // Inventory
    'inventory/stockCategory.js': '/app/inventory/stock-categories',
    'inventory/stockItem.js': '/app/inventory/stock-items',
    'inventory/stockPurchase.js': '/app/inventory/stock-purchases',
    'inventory/stockRequisition.js': '/app/inventory/stock-requisitions',
    'inventory/stockTransfer.js': '/app/inventory/stock-transfers',
    'inventory/stockAdjustment.js': '/app/inventory/stock-adjustments',
    'inventory/stockReturn.js': '/app/inventory/stock-returns',
    'inventory/vendor.js': '/app/inventory/vendors',

    // Communication
    'communication/announcement.js': '/app/communications/announcements',
    'communication/email.js': '/app/communications/emails',
    'communication/sms.js': '/app/communications/sms',
    'communication/pushMessage.js': '/app/communications/push-messages',
    'communication/whatsApp.js': '/app/communications/whatsapp',

    // Approval
    'approval/type.js': '/app/approval/types',
    'approval/request.js': '/app/approval/requests',

    // Helpdesk
    'helpdesk/faq.js': '/app/helpdesk/faqs',
    'helpdesk/ticket.js': '/app/helpdesk/tickets',

    // Task
    'task/task.js': '/app/tasks',

    // News
    'news/news.js': '/app/news',

    // Post
    'post/post.js': '/app/posts',

    // Calendar
    'calendar/event.js': '/app/calendar/events',
    'calendar/holiday.js': '/app/calendar/holidays',

    // Others
    'discipline/incident.js': '/app/discipline/incidents',
    'mess/meal.js': '/app/mess/meals',
    'mess/mealLog.js': '/app/mess/meal-logs',
    'mess/menuItem.js': '/app/mess/menu-items',
    'activity/trip.js': '/app/activities/trips',
    'recruitment/vacancy.js': '/app/recruitment/vacancies',
    'asset/building/block.js': '/app/assets/building/blocks',
    'asset/building/floor.js': '/app/assets/building/floors',
    'asset/building/room.js': '/app/assets/building/rooms',
    'site/page.js': '/app/site/pages',
    'site/menu.js': '/app/site/menus',
    'site/block.js': '/app/site/blocks',
    'utility/todo.js': '/app/utility/todos',
    'utility/backup.js': '/app/utility/backups',
    'utility/activityLog.js': '/app/utility/activity-logs',
};

const baseDir = 'resources/js/stores/modules';
let count = 0;

for (const [filePath, initURL] of Object.entries(modules)) {
    const fullPath = path.join(baseDir, filePath);
    const dir = path.dirname(fullPath);

    fs.mkdirSync(dir, { recursive: true });

    const content = `import { crudActions, crudMutations, crudGetters } from '${path.relative(dir, 'resources/js/stores').replace(/\\/g, '/')}/helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '${initURL}',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
`;

    fs.writeFileSync(fullPath, content);
    count++;
    console.log(`Created: ${fullPath}`);
}

console.log(`\nDone! Created ${count} store modules.`);
