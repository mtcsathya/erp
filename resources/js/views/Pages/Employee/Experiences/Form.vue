<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="EmployeeExperiences"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('employee.experiences.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employmentType"
          name="employmentType"
          :label="$trans('employee.experiences.props.employmentType')"
          v-model:error="formErrors.employmentType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.headline"
          name="headline"
          :label="$trans('employee.experiences.props.headline')"
          v-model:error="formErrors.headline"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('employee.experiences.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.organizationName"
          name="organizationName"
          :label="$trans('employee.experiences.props.organizationName')"
          v-model:error="formErrors.organizationName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.location"
          name="location"
          :label="$trans('employee.experiences.props.location')"
          v-model:error="formErrors.location"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startDate"
          name="startDate"
          :label="$trans('employee.experiences.props.startDate')"
          v-model:error="formErrors.startDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endDate"
          name="endDate"
          :label="$trans('employee.experiences.props.endDate')"
          v-model:error="formErrors.endDate"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.jobProfile"
          name="jobProfile"
          :label="$trans('employee.experiences.props.jobProfile')"
          v-model:error="formErrors.jobProfile"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isSubmittedOriginal"
          name="isSubmittedOriginal"
          :label="$trans('employee.experiences.props.isSubmittedOriginal')"
          v-model:error="formErrors.isSubmittedOriginal"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/experiences/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    employee: '',
    employmentType: '',
    headline: '',
    title: '',
    organizationName: '',
    location: '',
    startDate: '',
    endDate: '',
    jobProfile: '',
    isSubmittedOriginal: false,
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
