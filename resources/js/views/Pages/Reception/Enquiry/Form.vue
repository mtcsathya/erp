<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ReceptionEnquiry"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.period"
          name="period"
          :label="$trans('reception.enquiry.props.period')"
          v-model:error="formErrors.period"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('reception.enquiry.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.nature"
          name="nature"
          :label="$trans('reception.enquiry.props.nature')"
          v-model:error="formErrors.nature"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.stage"
          name="stage"
          :label="$trans('reception.enquiry.props.stage')"
          v-model:error="formErrors.stage"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('reception.enquiry.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.source"
          name="source"
          :label="$trans('reception.enquiry.props.source')"
          v-model:error="formErrors.source"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('reception.enquiry.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.course"
          name="course"
          :label="$trans('reception.enquiry.props.course')"
          v-model:error="formErrors.course"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('reception.enquiry.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.gender"
          name="gender"
          :label="$trans('reception.enquiry.props.gender')"
          v-model:error="formErrors.gender"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.birthDate"
          name="birthDate"
          :label="$trans('reception.enquiry.props.birthDate')"
          v-model:error="formErrors.birthDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('reception.enquiry.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('reception.enquiry.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('reception.enquiry.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.customFields"
          name="customFields"
          :label="$trans('reception.enquiry.props.customFields')"
          v-model:error="formErrors.customFields"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reception/enquiry/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    period: '',
    date: '',
    nature: '',
    stage: '',
    type: '',
    source: '',
    employee: '',
    course: '',
    name: '',
    gender: '',
    birthDate: '',
    contactNumber: '',
    description: '',
    remarks: '',
    customFields: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
