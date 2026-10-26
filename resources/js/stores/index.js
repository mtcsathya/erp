import { createStore } from 'vuex';
import academic_batch from './modules/academic/batch';
import academic_bookList from './modules/academic/bookList';
import academic_certificate from './modules/academic/certificate';
import academic_certificateTemplate from './modules/academic/certificateTemplate';
import academic_classTiming from './modules/academic/classTiming';
import academic_course from './modules/academic/course';
import academic_department from './modules/academic/department';
import academic_division from './modules/academic/division';
import academic_enrollmentSeat from './modules/academic/enrollmentSeat';
import academic_idCardTemplate from './modules/academic/idCardTemplate';
import academic_period from './modules/academic/period';
import academic_program from './modules/academic/program';
import academic_programType from './modules/academic/programType';
import academic_session from './modules/academic/session';
import academic_subject from './modules/academic/subject';
import academic_timetable from './modules/academic/timetable';
import activity_trip from './modules/activity/trip';
import approval_request from './modules/approval/request';
import approval_type from './modules/approval/type';
import asset_building_block from './modules/asset/building/block';
import asset_building_floor from './modules/asset/building/floor';
import asset_building_room from './modules/asset/building/room';
import auth from './modules/auth';
import blog from './modules/blog';
import calendar_event from './modules/calendar/event';
import calendar_holiday from './modules/calendar/holiday';
import chat from './modules/chat';
import communication_announcement from './modules/communication/announcement';
import communication_email from './modules/communication/email';
import communication_pushMessage from './modules/communication/pushMessage';
import communication_sms from './modules/communication/sms';
import communication_whatsApp from './modules/communication/whatsApp';
import config from './modules/config';
import customField from './modules/customField';
import dashboard from './modules/dashboard';
import device from './modules/device';
import discipline_incident from './modules/discipline/incident';
import employee_account from './modules/employee/account';
import employee_attendance from './modules/employee/attendance';
import employee_attendanceType from './modules/employee/attendanceType';
import employee_department from './modules/employee/department';
import employee_designation from './modules/employee/designation';
import employee_dialogue from './modules/employee/dialogue';
import employee_document from './modules/employee/document';
import employee_documentType from './modules/employee/documentType';
import employee_experience from './modules/employee/experience';
import employee_leaveAllocation from './modules/employee/leaveAllocation';
import employee_leaveRequest from './modules/employee/leaveRequest';
import employee_leaveType from './modules/employee/leaveType';
import employee_payHead from './modules/employee/payHead';
import employee_payroll from './modules/employee/payroll';
import employee_qualification from './modules/employee/qualification';
import employee_record from './modules/employee/record';
import employee_salaryStructure from './modules/employee/salaryStructure';
import employee_salaryTemplate from './modules/employee/salaryTemplate';
import employee_timesheet from './modules/employee/timesheet';
import employee_workShift from './modules/employee/workShift';
import exam_assessment from './modules/exam/assessment';
import exam_competency from './modules/exam/competency';
import exam_grade from './modules/exam/grade';
import exam_observation from './modules/exam/observation';
import exam_onlineExam from './modules/exam/onlineExam';
import exam_schedule from './modules/exam/schedule';
import exam_term from './modules/exam/term';
import finance_dayClosure from './modules/finance/dayClosure';
import finance_feeComponent from './modules/finance/feeComponent';
import finance_feeConcession from './modules/finance/feeConcession';
import finance_feeGroup from './modules/finance/feeGroup';
import finance_feeHead from './modules/finance/feeHead';
import finance_feeStructure from './modules/finance/feeStructure';
import finance_feeStructureComponent from './modules/finance/feeStructureComponent';
import finance_ledger from './modules/finance/ledger';
import finance_ledgerType from './modules/finance/ledgerType';
import finance_paymentMethod from './modules/finance/paymentMethod';
import finance_receipt from './modules/finance/receipt';
import finance_tax from './modules/finance/tax';
import finance_transaction from './modules/finance/transaction';
import form from './modules/form';
import gallery from './modules/gallery';
import general from './modules/general';
import helpdesk_faq from './modules/helpdesk/faq';
import helpdesk_ticket from './modules/helpdesk/ticket';
import hostel_block from './modules/hostel/block';
import hostel_blockIncharge from './modules/hostel/blockIncharge';
import hostel_floor from './modules/hostel/floor';
import hostel_room from './modules/hostel/room';
import hostel_roomAllocation from './modules/hostel/roomAllocation';
import image from './modules/image';
import inventory_stockAdjustment from './modules/inventory/stockAdjustment';
import inventory_stockCategory from './modules/inventory/stockCategory';
import inventory_stockItem from './modules/inventory/stockItem';
import inventory_stockPurchase from './modules/inventory/stockPurchase';
import inventory_stockRequisition from './modules/inventory/stockRequisition';
import inventory_stockReturn from './modules/inventory/stockReturn';
import inventory_stockTransfer from './modules/inventory/stockTransfer';
import inventory_vendor from './modules/inventory/vendor';
import layout from './modules/layout';
import library_book from './modules/library/book';
import library_bookAddition from './modules/library/bookAddition';
import library_bookCopy from './modules/library/bookCopy';
import library_transaction from './modules/library/transaction';
import mess_meal from './modules/mess/meal';
import mess_mealLog from './modules/mess/mealLog';
import mess_menuItem from './modules/mess/menuItem';
import moduleImport from './modules/moduleImport';
import navigation from './modules/navigation';
import news_news from './modules/news/news';
import notification from './modules/notification';
import option from './modules/option';
import organization from './modules/organization';
import post_post from './modules/post/post';
import product from './modules/product';
import reception_callLog from './modules/reception/callLog';
import reception_complaint from './modules/reception/complaint';
import reception_correspondence from './modules/reception/correspondence';
import reception_enquiry from './modules/reception/enquiry';
import reception_gatePass from './modules/reception/gatePass';
import reception_visitorLog from './modules/reception/visitorLog';
import recruitment_vacancy from './modules/recruitment/vacancy';
import reminder from './modules/reminder';
import resource_assignment from './modules/resource/assignment';
import resource_diary from './modules/resource/diary';
import resource_download from './modules/resource/download';
import resource_learningMaterial from './modules/resource/learningMaterial';
import resource_lessonPlan from './modules/resource/lessonPlan';
import resource_onlineClass from './modules/resource/onlineClass';
import resource_syllabus from './modules/resource/syllabus';
import setup from './modules/setup';
import site_block from './modules/site/block';
import site_menu from './modules/site/menu';
import site_page from './modules/site/page';
import student_account from './modules/student/account';
import student_attendance from './modules/student/attendance';
import student_attendanceType from './modules/student/attendanceType';
import student_customFee from './modules/student/customFee';
import student_dialogue from './modules/student/dialogue';
import student_document from './modules/student/document';
import student_documentType from './modules/student/documentType';
import student_feeAllocation from './modules/student/feeAllocation';
import student_feeRefund from './modules/student/feeRefund';
import student_guestPayment from './modules/student/guestPayment';
import student_healthRecord from './modules/student/healthRecord';
import student_leaveRequest from './modules/student/leaveRequest';
import student_onlineRegistration from './modules/student/onlineRegistration';
import student_promotion from './modules/student/promotion';
import student_qualification from './modules/student/qualification';
import student_registration from './modules/student/registration';
import student_rollNumber from './modules/student/rollNumber';
import student_serviceAllocation from './modules/student/serviceAllocation';
import student_serviceRequest from './modules/student/serviceRequest';
import student_subject from './modules/student/subject';
import student_timesheet from './modules/student/timesheet';
import student_transfer from './modules/student/transfer';
import student_transferCertificate from './modules/student/transferCertificate';
import support from './modules/support';
import tag from './modules/tag';
import task_task from './modules/task/task';
import team from './modules/team';
import transport_circle from './modules/transport/circle';
import transport_fee from './modules/transport/fee';
import transport_route from './modules/transport/route';
import transport_stoppage from './modules/transport/stoppage';
import transport_vehicle from './modules/transport/vehicle';
import user from './modules/user';
import utility_activityLog from './modules/utility/activityLog';
import utility_backup from './modules/utility/backup';
import utility_todo from './modules/utility/todo';

export default createStore({
    modules: {
        'academic/batch': academic_batch,
        'academic/bookList': academic_bookList,
        'academic/certificate': academic_certificate,
        'academic/certificateTemplate': academic_certificateTemplate,
        'academic/classTiming': academic_classTiming,
        'academic/course': academic_course,
        'academic/department': academic_department,
        'academic/division': academic_division,
        'academic/enrollmentSeat': academic_enrollmentSeat,
        'academic/idCardTemplate': academic_idCardTemplate,
        'academic/period': academic_period,
        'academic/program': academic_program,
        'academic/programType': academic_programType,
        'academic/session': academic_session,
        'academic/subject': academic_subject,
        'academic/timetable': academic_timetable,
        'activity/trip': activity_trip,
        'approval/request': approval_request,
        'approval/type': approval_type,
        'asset/building/block': asset_building_block,
        'asset/building/floor': asset_building_floor,
        'asset/building/room': asset_building_room,
        'auth': auth,
        'blog': blog,
        'calendar/event': calendar_event,
        'calendar/holiday': calendar_holiday,
        'chat': chat,
        'communication/announcement': communication_announcement,
        'communication/email': communication_email,
        'communication/pushMessage': communication_pushMessage,
        'communication/sms': communication_sms,
        'communication/whatsApp': communication_whatsApp,
        'config': config,
        'customField': customField,
        'dashboard': dashboard,
        'device': device,
        'discipline/incident': discipline_incident,
        'employee/account': employee_account,
        'employee/attendance': employee_attendance,
        'employee/attendanceType': employee_attendanceType,
        'employee/department': employee_department,
        'employee/designation': employee_designation,
        'employee/dialogue': employee_dialogue,
        'employee/document': employee_document,
        'employee/documentType': employee_documentType,
        'employee/experience': employee_experience,
        'employee/leaveAllocation': employee_leaveAllocation,
        'employee/leaveRequest': employee_leaveRequest,
        'employee/leaveType': employee_leaveType,
        'employee/payHead': employee_payHead,
        'employee/payroll': employee_payroll,
        'employee/qualification': employee_qualification,
        'employee/record': employee_record,
        'employee/salaryStructure': employee_salaryStructure,
        'employee/salaryTemplate': employee_salaryTemplate,
        'employee/timesheet': employee_timesheet,
        'employee/workShift': employee_workShift,
        'exam/assessment': exam_assessment,
        'exam/competency': exam_competency,
        'exam/grade': exam_grade,
        'exam/observation': exam_observation,
        'exam/onlineExam': exam_onlineExam,
        'exam/schedule': exam_schedule,
        'exam/term': exam_term,
        'finance/dayClosure': finance_dayClosure,
        'finance/feeComponent': finance_feeComponent,
        'finance/feeConcession': finance_feeConcession,
        'finance/feeGroup': finance_feeGroup,
        'finance/feeHead': finance_feeHead,
        'finance/feeStructure': finance_feeStructure,
        'finance/feeStructureComponent': finance_feeStructureComponent,
        'finance/ledger': finance_ledger,
        'finance/ledgerType': finance_ledgerType,
        'finance/paymentMethod': finance_paymentMethod,
        'finance/receipt': finance_receipt,
        'finance/tax': finance_tax,
        'finance/transaction': finance_transaction,
        'form': form,
        'gallery': gallery,
        'general': general,
        'helpdesk/faq': helpdesk_faq,
        'helpdesk/ticket': helpdesk_ticket,
        'hostel/block': hostel_block,
        'hostel/blockIncharge': hostel_blockIncharge,
        'hostel/floor': hostel_floor,
        'hostel/room': hostel_room,
        'hostel/roomAllocation': hostel_roomAllocation,
        'image': image,
        'inventory/stockAdjustment': inventory_stockAdjustment,
        'inventory/stockCategory': inventory_stockCategory,
        'inventory/stockItem': inventory_stockItem,
        'inventory/stockPurchase': inventory_stockPurchase,
        'inventory/stockRequisition': inventory_stockRequisition,
        'inventory/stockReturn': inventory_stockReturn,
        'inventory/stockTransfer': inventory_stockTransfer,
        'inventory/vendor': inventory_vendor,
        'layout': layout,
        'library/book': library_book,
        'library/bookAddition': library_bookAddition,
        'library/bookCopy': library_bookCopy,
        'library/transaction': library_transaction,
        'mess/meal': mess_meal,
        'mess/mealLog': mess_mealLog,
        'mess/menuItem': mess_menuItem,
        'moduleImport': moduleImport,
        'navigation': navigation,
        'news/news': news_news,
        'notification': notification,
        'option': option,
        'organization': organization,
        'post/post': post_post,
        'product': product,
        'reception/callLog': reception_callLog,
        'reception/complaint': reception_complaint,
        'reception/correspondence': reception_correspondence,
        'reception/enquiry': reception_enquiry,
        'reception/gatePass': reception_gatePass,
        'reception/visitorLog': reception_visitorLog,
        'recruitment/vacancy': recruitment_vacancy,
        'reminder': reminder,
        'resource/assignment': resource_assignment,
        'resource/diary': resource_diary,
        'resource/download': resource_download,
        'resource/learningMaterial': resource_learningMaterial,
        'resource/lessonPlan': resource_lessonPlan,
        'resource/onlineClass': resource_onlineClass,
        'resource/syllabus': resource_syllabus,
        'setup': setup,
        'site/block': site_block,
        'site/menu': site_menu,
        'site/page': site_page,
        'student/account': student_account,
        'student/attendance': student_attendance,
        'student/attendanceType': student_attendanceType,
        'student/customFee': student_customFee,
        'student/dialogue': student_dialogue,
        'student/document': student_document,
        'student/documentType': student_documentType,
        'student/feeAllocation': student_feeAllocation,
        'student/feeRefund': student_feeRefund,
        'student/guestPayment': student_guestPayment,
        'student/healthRecord': student_healthRecord,
        'student/leaveRequest': student_leaveRequest,
        'student/onlineRegistration': student_onlineRegistration,
        'student/promotion': student_promotion,
        'student/qualification': student_qualification,
        'student/registration': student_registration,
        'student/rollNumber': student_rollNumber,
        'student/serviceAllocation': student_serviceAllocation,
        'student/serviceRequest': student_serviceRequest,
        'student/subject': student_subject,
        'student/timesheet': student_timesheet,
        'student/transfer': student_transfer,
        'student/transferCertificate': student_transferCertificate,
        'support': support,
        'tag': tag,
        'task/task': task_task,
        'team': team,
        'transport/circle': transport_circle,
        'transport/fee': transport_fee,
        'transport/route': transport_route,
        'transport/stoppage': transport_stoppage,
        'transport/vehicle': transport_vehicle,
        'user': user,
        'utility/activityLog': utility_activityLog,
        'utility/backup': utility_backup,
        'utility/todo': utility_todo,
    },
});
