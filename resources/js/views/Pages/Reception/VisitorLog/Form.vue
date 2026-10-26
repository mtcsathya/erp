<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ReceptionVisitorLog"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.purpose"
          name="purpose"
          :label="$trans('reception.visitor_log.props.purpose')"
          v-model:error="formErrors.purpose"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('reception.visitor_log.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.count"
          name="count"
          :label="$trans('reception.visitor_log.props.count')"
          v-model:error="formErrors.count"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.entryAt"
          name="entryAt"
          :label="$trans('reception.visitor_log.props.entryAt')"
          v-model:error="formErrors.entryAt"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.exitAt"
          name="exitAt"
          :label="$trans('reception.visitor_log.props.exitAt')"
          v-model:error="formErrors.exitAt"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.visitor"
          name="visitor"
          :label="$trans('reception.visitor_log.props.visitor')"
          v-model:error="formErrors.visitor"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('reception.visitor_log.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('reception.visitor_log.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('reception.visitor_log.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reception/visitorLog/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    purpose: '',
    type: '',
    count: '',
    entryAt: '',
    exitAt: '',
    visitor: '',
    name: '',
    contactNumber: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
