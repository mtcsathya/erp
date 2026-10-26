<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="AcademicCertificate"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.template"
          name="template"
          :label="$trans('academic.certificate.props.template')"
          v-model:error="formErrors.template"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('academic.certificate.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('academic.certificate.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.customCodeNumber"
          name="customCodeNumber"
          :label="$trans('academic.certificate.props.customCodeNumber')"
          v-model:error="formErrors.customCodeNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('academic.certificate.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('academic.certificate.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isDuplicate"
          name="isDuplicate"
          :label="$trans('academic.certificate.props.isDuplicate')"
          v-model:error="formErrors.isDuplicate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.customFields"
          name="customFields"
          :label="$trans('academic.certificate.props.customFields')"
          v-model:error="formErrors.customFields"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'academic/certificate/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    template: '',
    student: '',
    employee: '',
    customCodeNumber: '',
    date: '',
    name: '',
    isDuplicate: false,
    customFields: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
