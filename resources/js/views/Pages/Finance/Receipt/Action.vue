<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.receipt.receipt'), path: 'FinanceReceiptList' },
    ]"
  >
    <PageHeaderAction name="FinanceReceipt" :title="$trans('finance.receipt.receipt')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceReceiptForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceReceiptForm from './Form.vue';
const route = useRoute();
</script>
