import fs from 'fs';
import path from 'path';

// Read the extracted form data
const formDataLines = fs.readFileSync('/tmp/form_data.txt', 'utf8').trim().split('\n');

// Map component name -> module path in Pages/
const nameToPath = {
    'AcademicBatch': 'Academic/Batch',
    'AcademicBatchIncharge': 'Academic/BatchIncharge',
    'AcademicBookList': 'Academic/BookList',
    'AcademicCertificateTemplate': 'Academic/CertificateTemplate',
    'AcademicCourse': 'Academic/Course',
    'AcademicCourseIncharge': 'Academic/CourseIncharge',
    'AcademicDepartment': 'Academic/Department',
    'AcademicDepartmentIncharge': 'Academic/DepartmentIncharge',
    'AcademicDivision': 'Academic/Division',
    'AcademicDivisionIncharge': 'Academic/DivisionIncharge',
    'AcademicEnrollmentSeat': 'Academic/EnrollmentSeat',
    'AcademicIdCardTemplate': 'Academic/IdCardTemplate',
    'AcademicProgramIncharge': 'Academic/ProgramIncharge',
    'AcademicSession': 'Academic/Session',
    'AcademicSubject': 'Academic/Subject',
    'AcademicSubjectIncharge': 'Academic/SubjectIncharge',
    'AssetBuildingBlock': 'Asset/Building/Block',
    'AssetBuildingFloor': 'Asset/Building/Floor',
    'AssetBuildingRoom': 'Asset/Building/Room',
    'CommunicationAnnouncement': 'Communication/Announcement',
    'CommunicationEmail': 'Communication/Email',
    'CommunicationSMS': 'Communication/SMS',
    'CommunicationWhatsApp': 'Communication/WhatsApp',
    'ConfigPushNotificationTemplate': 'Config/PushNotificationTemplate',
    'ConfigSMSTemplate': 'Config/SMSTemplate',
    'ConfigWhatsAppTemplate': 'Config/WhatsAppTemplate',
    'EmployeeAttendanceType': 'Employee/Attendance/Type',
    'EmployeeAttendanceWorkShift': 'Employee/Attendance/WorkShift',
    'EmployeeDepartment': 'Employee/Department',
    'EmployeeLeaveType': 'Employee/Leave/Type',
    'EmployeePayrollPayHead': 'Employee/Payroll/PayHead',
    'EmployeePayrollSalaryTemplate': 'Employee/Payroll/SalaryTemplate',
    'ExamTerm': 'Exam/Term',
    'FinanceFeeConcession': 'Finance/FeeConcession',
    'FinanceFeeGroup': 'Finance/FeeGroup',
    'FinanceFeeStructure': 'Finance/FeeStructure',
    'HostelBlock': 'Hostel/Block',
    'HostelBlockIncharge': 'Hostel/BlockIncharge',
    'HostelFloor': 'Hostel/Floor',
    'HostelRoom': 'Hostel/Room',
    'HostelRoomAllocation': 'Hostel/RoomAllocation',
    'InventoryIncharge': 'Inventory/Incharge',
    'ReceptionCallLog': 'Reception/CallLog',
    'RecruitmentApplication': 'Recruitment/Application',
    'ResourceAssignment': 'Resource/Assignment',
    'ResourceDiary': 'Resource/Diary',
    'ResourceLearningMaterial': 'Resource/LearningMaterial',
    'ResourceLessonPlan': 'Resource/LessonPlan',
    'ResourceOnlineClass': 'Resource/OnlineClass',
    'ResourceSyllabus': 'Resource/Syllabus',
    'StudentLeaveRequest': 'Student/LeaveRequest',
    'StudentTransfer': 'Student/Transfer',
    'TransportCircle': 'Transport/Circle',
    'TransportFee': 'Transport/Fee',
    'TransportStoppage': 'Transport/Stoppage',
    'TransportVehicleIncharge': 'Transport/Vehicle/Incharge',
};

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

let generated = 0;

for (const line of formDataLines) {
    const [formName, initUrl, fieldsStr] = line.split('|');
    if (!formName || !initUrl || !fieldsStr) continue;

    const entityName = formName.replace('Form', '');
    const pagePath = nameToPath[entityName];
    if (!pagePath) continue;

    const fields = fieldsStr.split(',');
    const baseDir = `resources/js/views/Pages/${pagePath}`;

    // Check if Action.vue exists and is still a stub
    const actionPath = `${baseDir}/Action.vue`;
    if (!fs.existsSync(actionPath)) continue;
    const content = fs.readFileSync(actionPath, 'utf8');
    if (!content.includes('TODO: Reconstruct')) continue;

    // Build translation keys
    const pathParts = pagePath.split('/');
    const moduleName = pathParts[0];
    const lastEntity = pathParts[pathParts.length - 1];
    const moduleKey = toSnakeCase(moduleName);
    const entityKey = toSnakeCase(lastEntity);
    const transPrefix = `${moduleKey}.${entityKey}`;
    const routeName = pathParts.join('');

    // Generate Form.vue
    const formFields = fields.map(f => {
        const isTextarea = ['description', 'remarks', 'content', 'conversation', 'reason', 'excerpt', 'qualificationSummary'].includes(f);
        const comp = isTextarea ? 'BaseTextarea' : 'BaseInput';
        const col = isTextarea ? 'col-span-3' : 'col-span-3 sm:col-span-1';
        return `      <div class="${col}">
        <${comp}
          ${isTextarea ? '' : 'type="text"\n          '}v-model="form.${f}"
          name="${f}"
          :label="$trans('${transPrefix}.props.${f}')"
          v-model:error="formErrors.${f}"
        />
      </div>`;
    }).join('\n');

    const initFormFields = fields.map(f => `    ${f}: ''`).join(',\n');

    fs.writeFileSync(`${baseDir}/Form.vue`, `<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="${routeName}"
  >
    <div class="grid grid-cols-3 gap-6">
${formFields}
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = '${initUrl}';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
${initFormFields},
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
`);

    // Generate Action.vue
    fs.writeFileSync(actionPath, `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routeName}List' },
    ]"
  >
    <PageHeaderAction name="${routeName}" :title="$trans('${transPrefix}.${entityKey}')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <${entityName}Form />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ${entityName}Form from './Form.vue';
const route = useRoute();
</script>
`);

    // Generate Index.vue
    const displayFields = fields.slice(0, 4).map(f =>
        `              <DataCell name="${f}">{{ item.${f} }}</DataCell>`
    ).join('\n');

    fs.writeFileSync(`${baseDir}/Index.vue`, `<template>
  <ListItem :init-url="initUrl" :additional-query="{ details: true }" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('${transPrefix}.${entityKey}')"
        :navs="[{ label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' }]"
      >
        <PageHeaderAction
          url="${initUrl}" name="${routeName}"
          :title="$trans('${transPrefix}.${entityKey}')"
          :actions="['create', 'filter']"
          :dropdown-actions="['print', 'pdf', 'excel']"
          @toggle-filter="showFilter = !showFilter"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="${transPrefix}" @refresh="emitter.emit('listItems')">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid"
              @double-click="router.push({ name: '${routeName}Show', params: { uuid: item.uuid } })">
${displayFields}
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
              <DataCell name="action">
                <FloatingMenu>
                  <FloatingMenuItem icon="fas fa-arrow-circle-right" @click="router.push({ name: '${routeName}Show', params: { uuid: item.uuid } })">{{ $trans('general.show') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-edit" @click="router.push({ name: '${routeName}Edit', params: { uuid: item.uuid } })">{{ $trans('general.edit') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-copy" @click="router.push({ name: '${routeName}Duplicate', params: { uuid: item.uuid } })">{{ $trans('general.duplicate') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-trash" @click="emitter.emit('deleteItem', { uuid: item.uuid })">{{ $trans('general.delete') }}</FloatingMenuItem>
                </FloatingMenu>
              </DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const emitter = inject('emitter');
const initUrl = '${initUrl}';
const showFilter = ref(false);
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
`);

    // Generate Show.vue
    const showFields = fields.map(f =>
        `                <ListItemView :label="$trans('${transPrefix}.props.${f}')">{{ item.${f} }}</ListItemView>`
    ).join('\n');

    fs.writeFileSync(`${baseDir}/Show.vue`, `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routeName}List' },
    ]"
  >
    <PageHeaderAction name="${routeName}" :title="$trans('${transPrefix}.${entityKey}')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: '${routeName}' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('${transPrefix}.${entityKey}') }}</template>
              <ListContainerVertical>
${showFields}
                <ListItemView :label="$trans('general.created_at')">{{ item.createdAt?.formatted }}</ListItemView>
                <ListItemView :label="$trans('general.updated_at')">{{ item.updatedAt?.formatted }}</ListItemView>
              </ListContainerVertical>
            </BaseCard>
          </template>
        </DetailLayoutVertical>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const initUrl = '${initUrl}';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
`);

    generated++;
    console.log(`Generated: ${pagePath} (${fields.length} fields)`);
}

console.log(`\nDone! Generated ${generated} complete CRUD modules (Action + Form + Index + Show).`);
