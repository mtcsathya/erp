<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentTransfer"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('student.transfer.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('student.transfer.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.transferCertificateNumber"
          name="transferCertificateNumber"
          :label="$trans('student.transfer.props.transferCertificateNumber')"
          v-model:error="formErrors.transferCertificateNumber"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.reason"
          name="reason"
          :label="$trans('student.transfer.props.reason')"
          v-model:error="formErrors.reason"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.team"
          name="team"
          :label="$trans('student.transfer.props.team')"
          v-model:error="formErrors.team"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('student.transfer.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/transfer/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    student: '',
    date: '',
    transferCertificateNumber: '',
    reason: '',
    team: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
