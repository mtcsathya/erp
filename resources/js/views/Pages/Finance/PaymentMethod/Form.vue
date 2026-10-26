<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinancePaymentMethod"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('finance.payment_method.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('finance.payment_method.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasInstrumentDate"
          name="hasInstrumentDate"
          :label="$trans('finance.payment_method.props.hasInstrumentDate')"
          v-model:error="formErrors.hasInstrumentDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasInstrumentNumber"
          name="hasInstrumentNumber"
          :label="$trans('finance.payment_method.props.hasInstrumentNumber')"
          v-model:error="formErrors.hasInstrumentNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasClearingDate"
          name="hasClearingDate"
          :label="$trans('finance.payment_method.props.hasClearingDate')"
          v-model:error="formErrors.hasClearingDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasBankDetail"
          name="hasBankDetail"
          :label="$trans('finance.payment_method.props.hasBankDetail')"
          v-model:error="formErrors.hasBankDetail"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasBranchDetail"
          name="hasBranchDetail"
          :label="$trans('finance.payment_method.props.hasBranchDetail')"
          v-model:error="formErrors.hasBranchDetail"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasReferenceNumber"
          name="hasReferenceNumber"
          :label="$trans('finance.payment_method.props.hasReferenceNumber')"
          v-model:error="formErrors.hasReferenceNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasCardProvider"
          name="hasCardProvider"
          :label="$trans('finance.payment_method.props.hasCardProvider')"
          v-model:error="formErrors.hasCardProvider"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isPaymentGateway"
          name="isPaymentGateway"
          :label="$trans('finance.payment_method.props.isPaymentGateway')"
          v-model:error="formErrors.isPaymentGateway"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.paymentGatewayName"
          name="paymentGatewayName"
          :label="$trans('finance.payment_method.props.paymentGatewayName')"
          v-model:error="formErrors.paymentGatewayName"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('finance.payment_method.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/paymentMethod/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    code: '',
    hasInstrumentDate: false,
    hasInstrumentNumber: false,
    hasClearingDate: false,
    hasBankDetail: false,
    hasBranchDetail: false,
    hasReferenceNumber: false,
    hasCardProvider: false,
    isPaymentGateway: false,
    paymentGatewayName: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
