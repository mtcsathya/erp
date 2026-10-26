<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ReceptionCallLog"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('reception.call_log.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.purpose"
          name="purpose"
          :label="$trans('reception.call_log.props.purpose')"
          v-model:error="formErrors.purpose"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('reception.call_log.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.callAt"
          name="callAt"
          :label="$trans('reception.call_log.props.callAt')"
          v-model:error="formErrors.callAt"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.duration"
          name="duration"
          :label="$trans('reception.call_log.props.duration')"
          v-model:error="formErrors.duration"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.incomingNumber"
          name="incomingNumber"
          :label="$trans('reception.call_log.props.incomingNumber')"
          v-model:error="formErrors.incomingNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.outgoingNumber"
          name="outgoingNumber"
          :label="$trans('reception.call_log.props.outgoingNumber')"
          v-model:error="formErrors.outgoingNumber"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.conversation"
          name="conversation"
          :label="$trans('reception.call_log.props.conversation')"
          v-model:error="formErrors.conversation"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('reception.call_log.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reception/callLog/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    purpose: '',
    name: '',
    callAt: '',
    duration: '',
    incomingNumber: '',
    outgoingNumber: '',
    conversation: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
