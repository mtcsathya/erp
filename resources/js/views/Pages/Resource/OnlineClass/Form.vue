<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ResourceOnlineClass"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.topic"
          name="topic"
          :label="$trans('resource.online_class.props.topic')"
          v-model:error="formErrors.topic"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('resource.online_class.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.platform"
          name="platform"
          :label="$trans('resource.online_class.props.platform')"
          v-model:error="formErrors.platform"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.meetingCode"
          name="meetingCode"
          :label="$trans('resource.online_class.props.meetingCode')"
          v-model:error="formErrors.meetingCode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.url"
          name="url"
          :label="$trans('resource.online_class.props.url')"
          v-model:error="formErrors.url"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.password"
          name="password"
          :label="$trans('resource.online_class.props.password')"
          v-model:error="formErrors.password"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('resource.online_class.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'resource/onlineClass/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    topic: '',
    subject: '',
    platform: '',
    meetingCode: '',
    url: '',
    password: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
