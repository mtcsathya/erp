<template>
  <div v-if="item" class="space-y-1">
    <div class="text-sm"><span class="font-medium text-gray-500">{{ $trans('finance.payment_method.payment_method') }}:</span> {{ item.paymentMethod?.name }}</div>
    <div v-if="item.instrumentNumber" class="text-sm"><span class="font-medium text-gray-500">{{ $trans('finance.transaction.props.instrument_number') }}:</span> {{ item.instrumentNumber }}</div>
    <div v-if="item.instrumentDate" class="text-sm"><span class="font-medium text-gray-500">{{ $trans('finance.transaction.props.instrument_date') }}:</span> {{ item.instrumentDate }}</div>
    <div v-if="item.clearingDate" class="text-sm"><span class="font-medium text-gray-500">{{ $trans('finance.transaction.props.clearing_date') }}:</span> {{ item.clearingDate }}</div>
    <div v-if="item.bankDetail" class="text-sm"><span class="font-medium text-gray-500">{{ $trans('finance.transaction.props.bank_detail') }}:</span> {{ item.bankDetail }}</div>
    <div v-if="item.referenceNumber" class="text-sm"><span class="font-medium text-gray-500">{{ $trans('finance.transaction.props.reference_number') }}:</span> {{ item.referenceNumber }}</div>
  </div>
</template>

<script setup>
defineProps({ item: { type: Object, default: null } });
</script>
