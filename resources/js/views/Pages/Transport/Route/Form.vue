<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="TransportRoute"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('transport.route.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maxCapacity"
          name="maxCapacity"
          :label="$trans('transport.route.props.maxCapacity')"
          v-model:error="formErrors.maxCapacity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vehicle"
          name="vehicle"
          :label="$trans('transport.route.props.vehicle')"
          v-model:error="formErrors.vehicle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.direction"
          name="direction"
          :label="$trans('transport.route.props.direction')"
          v-model:error="formErrors.direction"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.arrivalStartsAt"
          name="arrivalStartsAt"
          :label="$trans('transport.route.props.arrivalStartsAt')"
          v-model:error="formErrors.arrivalStartsAt"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.departureStartsAt"
          name="departureStartsAt"
          :label="$trans('transport.route.props.departureStartsAt')"
          v-model:error="formErrors.departureStartsAt"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.stoppages"
          name="stoppages"
          :label="$trans('transport.route.props.stoppages')"
          v-model:error="formErrors.stoppages"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.durationToDestination"
          name="durationToDestination"
          :label="$trans('transport.route.props.durationToDestination')"
          v-model:error="formErrors.durationToDestination"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('transport.route.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'transport/route/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    maxCapacity: '',
    vehicle: '',
    direction: '',
    arrivalStartsAt: '',
    departureStartsAt: '',
    stoppages: '',
    durationToDestination: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
