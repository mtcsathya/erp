<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceLedger"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('finance.ledger.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.alias"
          name="alias"
          :label="$trans('finance.ledger.props.alias')"
          v-model:error="formErrors.alias"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('finance.ledger.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('finance.ledger.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.openingBalance"
          name="openingBalance"
          :label="$trans('finance.ledger.props.openingBalance')"
          v-model:error="formErrors.openingBalance"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('finance.ledger.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('finance.ledger.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('finance.ledger.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.codePrefix"
          name="codePrefix"
          :label="$trans('finance.ledger.props.codePrefix')"
          v-model:error="formErrors.codePrefix"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.codeDigit"
          name="codeDigit"
          :label="$trans('finance.ledger.props.codeDigit')"
          v-model:error="formErrors.codeDigit"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.codeSuffix"
          name="codeSuffix"
          :label="$trans('finance.ledger.props.codeSuffix')"
          v-model:error="formErrors.codeSuffix"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.address"
          name="address"
          :label="$trans('finance.ledger.props.address')"
          v-model:error="formErrors.address"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.addressLine1"
          name="addressLine1"
          :label="$trans('finance.ledger.props.addressLine1')"
          v-model:error="formErrors.addressLine1"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.addressLine2"
          name="addressLine2"
          :label="$trans('finance.ledger.props.addressLine2')"
          v-model:error="formErrors.addressLine2"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.city"
          name="city"
          :label="$trans('finance.ledger.props.city')"
          v-model:error="formErrors.city"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.state"
          name="state"
          :label="$trans('finance.ledger.props.state')"
          v-model:error="formErrors.state"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.zipcode"
          name="zipcode"
          :label="$trans('finance.ledger.props.zipcode')"
          v-model:error="formErrors.zipcode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.country"
          name="country"
          :label="$trans('finance.ledger.props.country')"
          v-model:error="formErrors.country"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/ledger/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    alias: '',
    code: '',
    type: '',
    openingBalance: '',
    description: '',
    contactNumber: '',
    email: '',
    codePrefix: '',
    codeDigit: '',
    codeSuffix: '',
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
