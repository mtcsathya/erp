<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="CommunicationEmail"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('communication.email.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.studentAudienceType"
          name="studentAudienceType"
          :label="$trans('communication.email.props.studentAudienceType')"
          v-model:error="formErrors.studentAudienceType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employeeAudienceType"
          name="employeeAudienceType"
          :label="$trans('communication.email.props.employeeAudienceType')"
          v-model:error="formErrors.employeeAudienceType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.inclusion"
          name="inclusion"
          :label="$trans('communication.email.props.inclusion')"
          v-model:error="formErrors.inclusion"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.exclusion"
          name="exclusion"
          :label="$trans('communication.email.props.exclusion')"
          v-model:error="formErrors.exclusion"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.content"
          name="content"
          :label="$trans('communication.email.props.content')"
          v-model:error="formErrors.content"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'communication/email/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    subject: '',
    studentAudienceType: '',
    employeeAudienceType: '',
    inclusion: '',
    exclusion: '',
    content: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
