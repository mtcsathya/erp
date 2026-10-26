<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3 sm:col-span-1">
      <BaseSelect v-model="form.paymentMethod" name="paymentMethod"
        :label="$trans('finance.payment_method.payment_method')" :options="paymentMethods"
        label-prop="name" value-prop="uuid" v-model:error="errors.paymentMethod" />
    </div>
    <div v-if="selectedMethod?.hasInstrumentNumber" class="col-span-3 sm:col-span-1">
      <BaseInput type="text" v-model="form.instrumentNumber" name="instrumentNumber"
        :label="$trans('finance.transaction.props.instrument_number')" />
    </div>
    <div v-if="selectedMethod?.hasInstrumentDate" class="col-span-3 sm:col-span-1">
      <BaseInput type="date" v-model="form.instrumentDate" name="instrumentDate"
        :label="$trans('finance.transaction.props.instrument_date')" />
    </div>
    <div v-if="selectedMethod?.hasClearingDate" class="col-span-3 sm:col-span-1">
      <BaseInput type="date" v-model="form.clearingDate" name="clearingDate"
        :label="$trans('finance.transaction.props.clearing_date')" />
    </div>
    <div v-if="selectedMethod?.hasBankDetail" class="col-span-3 sm:col-span-1">
      <BaseInput type="text" v-model="form.bankDetail" name="bankDetail"
        :label="$trans('finance.transaction.props.bank_detail')" />
    </div>
    <div v-if="selectedMethod?.hasBranchDetail" class="col-span-3 sm:col-span-1">
      <BaseInput type="text" v-model="form.branchDetail" name="branchDetail"
        :label="$trans('finance.transaction.props.branch_detail')" />
    </div>
    <div v-if="selectedMethod?.hasReferenceNumber" class="col-span-3 sm:col-span-1">
      <BaseInput type="text" v-model="form.referenceNumber" name="referenceNumber"
        :label="$trans('finance.transaction.props.reference_number')" />
    </div>
    <div v-if="selectedMethod?.hasCardProvider" class="col-span-3 sm:col-span-1">
      <BaseInput type="text" v-model="form.cardProvider" name="cardProvider"
        :label="$trans('finance.transaction.props.card_provider')" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    form: { type: Object, required: true },
    paymentMethods: { type: Array, default: () => [] },
    errors: { type: Object, default: () => ({}) },
});

const selectedMethod = computed(() =>
    props.paymentMethods.find(m => m.uuid === props.form.paymentMethod)
);
</script>
