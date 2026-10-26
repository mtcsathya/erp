<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="TransportVehicleFuelRecord"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vehicle"
          name="vehicle"
          :label="$trans('transport.vehicle.fuel_record.props.vehicle')"
          v-model:error="formErrors.vehicle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.quantity"
          name="quantity"
          :label="$trans('transport.vehicle.fuel_record.props.quantity')"
          v-model:error="formErrors.quantity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.pricePerUnit"
          name="pricePerUnit"
          :label="$trans('transport.vehicle.fuel_record.props.pricePerUnit')"
          v-model:error="formErrors.pricePerUnit"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.log"
          name="log"
          :label="$trans('transport.vehicle.fuel_record.props.log')"
          v-model:error="formErrors.log"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.previousLog"
          name="previousLog"
          :label="$trans('transport.vehicle.fuel_record.props.previousLog')"
          v-model:error="formErrors.previousLog"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('transport.vehicle.fuel_record.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vendor"
          name="vendor"
          :label="$trans('transport.vehicle.fuel_record.props.vendor')"
          v-model:error="formErrors.vendor"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.billNumber"
          name="billNumber"
          :label="$trans('transport.vehicle.fuel_record.props.billNumber')"
          v-model:error="formErrors.billNumber"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('transport.vehicle.fuel_record.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'transport/vehicle/fuelRecord/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    vehicle: '',
    quantity: '',
    pricePerUnit: '',
    log: '',
    previousLog: '',
    date: '',
    vendor: '',
    billNumber: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
