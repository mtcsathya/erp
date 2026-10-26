<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="EmployeeQualifications"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('employee.qualifications.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.level"
          name="level"
          :label="$trans('employee.qualifications.props.level')"
          v-model:error="formErrors.level"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.course"
          name="course"
          :label="$trans('employee.qualifications.props.course')"
          v-model:error="formErrors.course"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.session"
          name="session"
          :label="$trans('employee.qualifications.props.session')"
          v-model:error="formErrors.session"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.institute"
          name="institute"
          :label="$trans('employee.qualifications.props.institute')"
          v-model:error="formErrors.institute"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.instituteAddress"
          name="instituteAddress"
          :label="$trans('employee.qualifications.props.instituteAddress')"
          v-model:error="formErrors.instituteAddress"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.affiliatedTo"
          name="affiliatedTo"
          :label="$trans('employee.qualifications.props.affiliatedTo')"
          v-model:error="formErrors.affiliatedTo"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startDate"
          name="startDate"
          :label="$trans('employee.qualifications.props.startDate')"
          v-model:error="formErrors.startDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endDate"
          name="endDate"
          :label="$trans('employee.qualifications.props.endDate')"
          v-model:error="formErrors.endDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.result"
          name="result"
          :label="$trans('employee.qualifications.props.result')"
          v-model:error="formErrors.result"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.totalMarks"
          name="totalMarks"
          :label="$trans('employee.qualifications.props.totalMarks')"
          v-model:error="formErrors.totalMarks"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.obtainedMarks"
          name="obtainedMarks"
          :label="$trans('employee.qualifications.props.obtainedMarks')"
          v-model:error="formErrors.obtainedMarks"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.failedSubjects"
          name="failedSubjects"
          :label="$trans('employee.qualifications.props.failedSubjects')"
          v-model:error="formErrors.failedSubjects"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isSubmittedOriginal"
          name="isSubmittedOriginal"
          :label="$trans('employee.qualifications.props.isSubmittedOriginal')"
          v-model:error="formErrors.isSubmittedOriginal"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/qualifications/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    employee: '',
    level: '',
    course: '',
    session: '',
    institute: '',
    instituteAddress: '',
    affiliatedTo: '',
    startDate: '',
    endDate: '',
    result: '',
    totalMarks: '',
    obtainedMarks: '',
    failedSubjects: '',
    isSubmittedOriginal: false,
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
