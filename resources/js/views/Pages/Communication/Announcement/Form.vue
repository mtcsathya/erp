<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="CommunicationAnnouncement"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('communication.announcement.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('communication.announcement.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.batch"
          name="batch"
          :label="$trans('communication.announcement.props.batch')"
          v-model:error="formErrors.batch"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.excerpt"
          name="excerpt"
          :label="$trans('communication.announcement.props.excerpt')"
          v-model:error="formErrors.excerpt"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.studentAudienceType"
          name="studentAudienceType"
          :label="$trans('communication.announcement.props.studentAudienceType')"
          v-model:error="formErrors.studentAudienceType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employeeAudienceType"
          name="employeeAudienceType"
          :label="$trans('communication.announcement.props.employeeAudienceType')"
          v-model:error="formErrors.employeeAudienceType"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('communication.announcement.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'communication/announcement/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    type: '',
    batch: '',
    excerpt: '',
    studentAudienceType: '',
    employeeAudienceType: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
