<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="AcademicProgram"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('academic.program.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.department"
          name="department"
          :label="$trans('academic.program.props.department')"
          v-model:error="formErrors.department"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('academic.program.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('academic.program.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.shortcode"
          name="shortcode"
          :label="$trans('academic.program.props.shortcode')"
          v-model:error="formErrors.shortcode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.alias"
          name="alias"
          :label="$trans('academic.program.props.alias')"
          v-model:error="formErrors.alias"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.enableRegistration"
          name="enableRegistration"
          :label="$trans('academic.program.props.enableRegistration')"
          v-model:error="formErrors.enableRegistration"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.duration"
          name="duration"
          :label="$trans('academic.program.props.duration')"
          v-model:error="formErrors.duration"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.eligibility"
          name="eligibility"
          :label="$trans('academic.program.props.eligibility')"
          v-model:error="formErrors.eligibility"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.benefits"
          name="benefits"
          :label="$trans('academic.program.props.benefits')"
          v-model:error="formErrors.benefits"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('academic.program.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'academic/program/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    department: '',
    name: '',
    code: '',
    shortcode: '',
    alias: '',
    enableRegistration: false,
    duration: '',
    eligibility: '',
    benefits: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
