<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="TransportVehicleExpenseRecord"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vehicle"
          name="vehicle"
          :label="$trans('transport.vehicle.expense_record.props.vehicle')"
          v-model:error="formErrors.vehicle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('transport.vehicle.expense_record.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('transport.vehicle.expense_record.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.quantity"
          name="quantity"
          :label="$trans('transport.vehicle.expense_record.props.quantity')"
          v-model:error="formErrors.quantity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.unit"
          name="unit"
          :label="$trans('transport.vehicle.expense_record.props.unit')"
          v-model:error="formErrors.unit"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.pricePerUnit"
          name="pricePerUnit"
          :label="$trans('transport.vehicle.expense_record.props.pricePerUnit')"
          v-model:error="formErrors.pricePerUnit"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.amount"
          name="amount"
          :label="$trans('transport.vehicle.expense_record.props.amount')"
          v-model:error="formErrors.amount"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.log"
          name="log"
          :label="$trans('transport.vehicle.expense_record.props.log')"
          v-model:error="formErrors.log"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'transport/vehicle/expenseRecord/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    vehicle: '',
    type: '',
    date: '',
    quantity: '',
    unit: '',
    pricePerUnit: '',
    amount: '',
    log: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
