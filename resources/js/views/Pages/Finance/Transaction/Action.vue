<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.transaction.transaction'), path: 'FinanceTransactionList' },
    ]"
  >
    <PageHeaderAction name="FinanceTransaction" :title="$trans('finance.transaction.transaction')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceTransactionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceTransactionForm from './Form.vue';
const route = useRoute();
</script>
