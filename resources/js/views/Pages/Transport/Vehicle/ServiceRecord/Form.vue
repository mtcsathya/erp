<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="TransportVehicleServiceRecord"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vehicle"
          name="vehicle"
          :label="$trans('transport.vehicle.service_record.props.vehicle')"
          v-model:error="formErrors.vehicle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('transport.vehicle.service_record.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.amount"
          name="amount"
          :label="$trans('transport.vehicle.service_record.props.amount')"
          v-model:error="formErrors.amount"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.log"
          name="log"
          :label="$trans('transport.vehicle.service_record.props.log')"
          v-model:error="formErrors.log"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.nextDueDate"
          name="nextDueDate"
          :label="$trans('transport.vehicle.service_record.props.nextDueDate')"
          v-model:error="formErrors.nextDueDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.nextDueLog"
          name="nextDueLog"
          :label="$trans('transport.vehicle.service_record.props.nextDueLog')"
          v-model:error="formErrors.nextDueLog"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('transport.vehicle.service_record.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'transport/vehicle/serviceRecord/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    vehicle: '',
    date: '',
    amount: '',
    log: '',
    nextDueDate: '',
    nextDueLog: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
