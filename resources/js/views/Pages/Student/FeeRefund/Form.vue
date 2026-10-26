<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentFeeRefund"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('student.fee_refund.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.records"
          name="records"
          :label="$trans('student.fee_refund.props.records')"
          v-model:error="formErrors.records"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.ledger"
          name="ledger"
          :label="$trans('student.fee_refund.props.ledger')"
          v-model:error="formErrors.ledger"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.paymentMethod"
          name="paymentMethod"
          :label="$trans('student.fee_refund.props.paymentMethod')"
          v-model:error="formErrors.paymentMethod"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.instrumentNumber"
          name="instrumentNumber"
          :label="$trans('student.fee_refund.props.instrumentNumber')"
          v-model:error="formErrors.instrumentNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.instrumentDate"
          name="instrumentDate"
          :label="$trans('student.fee_refund.props.instrumentDate')"
          v-model:error="formErrors.instrumentDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.clearingDate"
          name="clearingDate"
          :label="$trans('student.fee_refund.props.clearingDate')"
          v-model:error="formErrors.clearingDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankDetail"
          name="bankDetail"
          :label="$trans('student.fee_refund.props.bankDetail')"
          v-model:error="formErrors.bankDetail"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.referenceNumber"
          name="referenceNumber"
          :label="$trans('student.fee_refund.props.referenceNumber')"
          v-model:error="formErrors.referenceNumber"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('student.fee_refund.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/feeRefund/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    date: '',
    records: '',
    ledger: '',
    paymentMethod: '',
    instrumentNumber: '',
    instrumentDate: '',
    clearingDate: '',
    bankDetail: '',
    referenceNumber: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
