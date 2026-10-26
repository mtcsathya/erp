<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="TransportVehicle"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('transport.vehicle.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.registrationNumber"
          name="registrationNumber"
          :label="$trans('transport.vehicle.props.registrationNumber')"
          v-model:error="formErrors.registrationNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.registrationPlace"
          name="registrationPlace"
          :label="$trans('transport.vehicle.props.registrationPlace')"
          v-model:error="formErrors.registrationPlace"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.registrationDate"
          name="registrationDate"
          :label="$trans('transport.vehicle.props.registrationDate')"
          v-model:error="formErrors.registrationDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('transport.vehicle.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.modelNumber"
          name="modelNumber"
          :label="$trans('transport.vehicle.props.modelNumber')"
          v-model:error="formErrors.modelNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.make"
          name="make"
          :label="$trans('transport.vehicle.props.make')"
          v-model:error="formErrors.make"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.class"
          name="class"
          :label="$trans('transport.vehicle.props.class')"
          v-model:error="formErrors.class"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.engineNumber"
          name="engineNumber"
          :label="$trans('transport.vehicle.props.engineNumber')"
          v-model:error="formErrors.engineNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.chassisNumber"
          name="chassisNumber"
          :label="$trans('transport.vehicle.props.chassisNumber')"
          v-model:error="formErrors.chassisNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.cubicCapacity"
          name="cubicCapacity"
          :label="$trans('transport.vehicle.props.cubicCapacity')"
          v-model:error="formErrors.cubicCapacity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.color"
          name="color"
          :label="$trans('transport.vehicle.props.color')"
          v-model:error="formErrors.color"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.fuelType"
          name="fuelType"
          :label="$trans('transport.vehicle.props.fuelType')"
          v-model:error="formErrors.fuelType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.seatingCapacity"
          name="seatingCapacity"
          :label="$trans('transport.vehicle.props.seatingCapacity')"
          v-model:error="formErrors.seatingCapacity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maxSeatingAllowed"
          name="maxSeatingAllowed"
          :label="$trans('transport.vehicle.props.maxSeatingAllowed')"
          v-model:error="formErrors.maxSeatingAllowed"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.fuelCapacity"
          name="fuelCapacity"
          :label="$trans('transport.vehicle.props.fuelCapacity')"
          v-model:error="formErrors.fuelCapacity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.ownership"
          name="ownership"
          :label="$trans('transport.vehicle.props.ownership')"
          v-model:error="formErrors.ownership"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'transport/vehicle/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    registrationNumber: '',
    registrationPlace: '',
    registrationDate: '',
    type: '',
    modelNumber: '',
    make: '',
    class: '',
    engineNumber: '',
    chassisNumber: '',
    cubicCapacity: '',
    color: '',
    fuelType: '',
    seatingCapacity: '',
    maxSeatingAllowed: '',
    fuelCapacity: '',
    ownership: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
