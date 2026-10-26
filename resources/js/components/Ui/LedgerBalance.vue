<template>
  <div v-if="balance !== null" class="text-sm">
    <span class="font-medium text-gray-500">{{ $trans('finance.ledger.props.balance') }}:</span>
    <span :class="balance >= 0 ? 'text-green-600' : 'text-red-600'">
      {{ formattedBalance }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    balance: { type: Number, default: null },
    currency: { type: String, default: '' },
});

const formattedBalance = computed(() => {
    if (props.balance === null) return '';
    const val = Math.abs(props.balance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (props.balance < 0 ? '-' : '') + (props.currency ? `${props.currency} ` : '') + val;
});
</script>
