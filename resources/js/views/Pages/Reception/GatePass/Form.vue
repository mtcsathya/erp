<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ReceptionGatePass"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.to"
          name="to"
          :label="$trans('reception.gate_pass.props.to')"
          v-model:error="formErrors.to"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.purpose"
          name="purpose"
          :label="$trans('reception.gate_pass.props.purpose')"
          v-model:error="formErrors.purpose"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.requesters"
          name="requesters"
          :label="$trans('reception.gate_pass.props.requesters')"
          v-model:error="formErrors.requesters"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startAt"
          name="startAt"
          :label="$trans('reception.gate_pass.props.startAt')"
          v-model:error="formErrors.startAt"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.reason"
          name="reason"
          :label="$trans('reception.gate_pass.props.reason')"
          v-model:error="formErrors.reason"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('reception.gate_pass.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reception/gatePass/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    to: '',
    purpose: '',
    requesters: '',
    startAt: '',
    reason: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
