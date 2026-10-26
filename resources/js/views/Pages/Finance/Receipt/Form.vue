<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceReceipt"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('finance.receipt.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.primaryLedger"
          name="primaryLedger"
          :label="$trans('finance.receipt.props.primaryLedger')"
          v-model:error="formErrors.primaryLedger"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('finance.receipt.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.amount"
          name="amount"
          :label="$trans('finance.receipt.props.amount')"
          v-model:error="formErrors.amount"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.secondaryLedger"
          name="secondaryLedger"
          :label="$trans('finance.receipt.props.secondaryLedger')"
          v-model:error="formErrors.secondaryLedger"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('finance.receipt.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('finance.receipt.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('finance.receipt.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('finance.receipt.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.paymentMethod"
          name="paymentMethod"
          :label="$trans('finance.receipt.props.paymentMethod')"
          v-model:error="formErrors.paymentMethod"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.instrumentNumber"
          name="instrumentNumber"
          :label="$trans('finance.receipt.props.instrumentNumber')"
          v-model:error="formErrors.instrumentNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.instrumentDate"
          name="instrumentDate"
          :label="$trans('finance.receipt.props.instrumentDate')"
          v-model:error="formErrors.instrumentDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.clearingDate"
          name="clearingDate"
          :label="$trans('finance.receipt.props.clearingDate')"
          v-model:error="formErrors.clearingDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankDetail"
          name="bankDetail"
          :label="$trans('finance.receipt.props.bankDetail')"
          v-model:error="formErrors.bankDetail"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.branchDetail"
          name="branchDetail"
          :label="$trans('finance.receipt.props.branchDetail')"
          v-model:error="formErrors.branchDetail"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.referenceNumber"
          name="referenceNumber"
          :label="$trans('finance.receipt.props.referenceNumber')"
          v-model:error="formErrors.referenceNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.cardProvider"
          name="cardProvider"
          :label="$trans('finance.receipt.props.cardProvider')"
          v-model:error="formErrors.cardProvider"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('finance.receipt.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('finance.receipt.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/receipt/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    primaryLedger: '',
    date: '',
    amount: '',
    secondaryLedger: '',
    student: '',
    employee: '',
    name: '',
    contactNumber: '',
    paymentMethod: '',
    instrumentNumber: '',
    instrumentDate: '',
    clearingDate: '',
    bankDetail: '',
    branchDetail: '',
    referenceNumber: '',
    cardProvider: '',
    description: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
