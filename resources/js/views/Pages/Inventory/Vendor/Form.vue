<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="InventoryVendor"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('inventory.vendor.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('inventory.vendor.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('inventory.vendor.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('inventory.vendor.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.openingBalance"
          name="openingBalance"
          :label="$trans('inventory.vendor.props.openingBalance')"
          v-model:error="formErrors.openingBalance"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.address"
          name="address"
          :label="$trans('inventory.vendor.props.address')"
          v-model:error="formErrors.address"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.addressLine1"
          name="addressLine1"
          :label="$trans('inventory.vendor.props.addressLine1')"
          v-model:error="formErrors.addressLine1"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.addressLine2"
          name="addressLine2"
          :label="$trans('inventory.vendor.props.addressLine2')"
          v-model:error="formErrors.addressLine2"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.city"
          name="city"
          :label="$trans('inventory.vendor.props.city')"
          v-model:error="formErrors.city"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.state"
          name="state"
          :label="$trans('inventory.vendor.props.state')"
          v-model:error="formErrors.state"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.zipcode"
          name="zipcode"
          :label="$trans('inventory.vendor.props.zipcode')"
          v-model:error="formErrors.zipcode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.country"
          name="country"
          :label="$trans('inventory.vendor.props.country')"
          v-model:error="formErrors.country"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'inventory/vendor/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    type: '',
    contactNumber: '',
    email: '',
    openingBalance: '',
    address: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
