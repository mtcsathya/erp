<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ReceptionComplaint"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.codeNumber"
          name="codeNumber"
          :label="$trans('reception.complaint.props.codeNumber')"
          v-model:error="formErrors.codeNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('reception.complaint.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('reception.complaint.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('reception.complaint.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('reception.complaint.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.complainantName"
          name="complainantName"
          :label="$trans('reception.complaint.props.complainantName')"
          v-model:error="formErrors.complainantName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.complainantContactNumber"
          name="complainantContactNumber"
          :label="$trans('reception.complaint.props.complainantContactNumber')"
          v-model:error="formErrors.complainantContactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.complainantAddress"
          name="complainantAddress"
          :label="$trans('reception.complaint.props.complainantAddress')"
          v-model:error="formErrors.complainantAddress"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('reception.complaint.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reception/complaint/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    codeNumber: '',
    student: '',
    type: '',
    subject: '',
    date: '',
    complainantName: '',
    complainantContactNumber: '',
    complainantAddress: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
