<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="TransportVehicleConfigExpenseType"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('transport.vehicle.config.expense_type.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasQuantity"
          name="hasQuantity"
          :label="$trans('transport.vehicle.config.expense_type.props.hasQuantity')"
          v-model:error="formErrors.hasQuantity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasReminder"
          name="hasReminder"
          :label="$trans('transport.vehicle.config.expense_type.props.hasReminder')"
          v-model:error="formErrors.hasReminder"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isDocumentRequired"
          name="isDocumentRequired"
          :label="$trans('transport.vehicle.config.expense_type.props.isDocumentRequired')"
          v-model:error="formErrors.isDocumentRequired"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.color"
          name="color"
          :label="$trans('transport.vehicle.config.expense_type.props.color')"
          v-model:error="formErrors.color"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('transport.vehicle.config.expense_type.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('transport.vehicle.config.expense_type.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'transport/vehicle/expenseType/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    hasQuantity: false,
    hasReminder: false,
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
