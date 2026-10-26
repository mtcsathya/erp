<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="CommunicationWhatsApp"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('communication.whats_app.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.studentAudienceType"
          name="studentAudienceType"
          :label="$trans('communication.whats_app.props.studentAudienceType')"
          v-model:error="formErrors.studentAudienceType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employeeAudienceType"
          name="employeeAudienceType"
          :label="$trans('communication.whats_app.props.employeeAudienceType')"
          v-model:error="formErrors.employeeAudienceType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.templateCode"
          name="templateCode"
          :label="$trans('communication.whats_app.props.templateCode')"
          v-model:error="formErrors.templateCode"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.content"
          name="content"
          :label="$trans('communication.whats_app.props.content')"
          v-model:error="formErrors.content"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.template"
          name="template"
          :label="$trans('communication.whats_app.props.template')"
          v-model:error="formErrors.template"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'communication/whatsapp/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    subject: '',
    studentAudienceType: '',
    employeeAudienceType: '',
    templateCode: '',
    content: '',
    template: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
