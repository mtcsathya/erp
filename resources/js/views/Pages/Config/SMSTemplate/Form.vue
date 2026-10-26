<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ConfigSMSTemplate"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('config.s_m_s_template.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.content"
          name="content"
          :label="$trans('config.s_m_s_template.props.content')"
          v-model:error="formErrors.content"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.templateId"
          name="templateId"
          :label="$trans('config.s_m_s_template.props.templateId')"
          v-model:error="formErrors.templateId"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.variablesDisplay"
          name="variablesDisplay"
          :label="$trans('config.s_m_s_template.props.variablesDisplay')"
          v-model:error="formErrors.variablesDisplay"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'config/smsTemplate/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    subject: '',
    content: '',
    templateId: '',
    variablesDisplay: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
