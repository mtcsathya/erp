<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentTransferRequest"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('student.transfer_request.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.requestDate"
          name="requestDate"
          :label="$trans('student.transfer_request.props.requestDate')"
          v-model:error="formErrors.requestDate"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.reason"
          name="reason"
          :label="$trans('student.transfer_request.props.reason')"
          v-model:error="formErrors.reason"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.application"
          name="application"
          :label="$trans('student.transfer_request.props.application')"
          v-model:error="formErrors.application"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/transferRequest/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    student: '',
    requestDate: '',
    reason: '',
    application: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
