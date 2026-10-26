<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="EmployeeConfigDocumentType"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('employee.config.document_type.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasNumber"
          name="hasNumber"
          :label="$trans('employee.config.document_type.props.hasNumber')"
          v-model:error="formErrors.hasNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.numberFormat"
          name="numberFormat"
          :label="$trans('employee.config.document_type.props.numberFormat')"
          v-model:error="formErrors.numberFormat"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasExpiryDate"
          name="hasExpiryDate"
          :label="$trans('employee.config.document_type.props.hasExpiryDate')"
          v-model:error="formErrors.hasExpiryDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.alertDaysBeforeExpiry"
          name="alertDaysBeforeExpiry"
          :label="$trans('employee.config.document_type.props.alertDaysBeforeExpiry')"
          v-model:error="formErrors.alertDaysBeforeExpiry"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isDocumentRequired"
          name="isDocumentRequired"
          :label="$trans('employee.config.document_type.props.isDocumentRequired')"
          v-model:error="formErrors.isDocumentRequired"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.color"
          name="color"
          :label="$trans('employee.config.document_type.props.color')"
          v-model:error="formErrors.color"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('employee.config.document_type.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('employee.config.document_type.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/documentType/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    hasNumber: false,
    numberFormat: '',
    hasExpiryDate: false,
    alertDaysBeforeExpiry: '',
    isDocumentRequired: false,
    color: '',
    description: '',
    type: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
