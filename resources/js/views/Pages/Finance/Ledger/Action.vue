<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.ledger.ledger'), path: 'FinanceLedgerList' },
    ]"
  >
    <PageHeaderAction name="FinanceLedger" :title="$trans('finance.ledger.ledger')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceLedgerForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceLedgerForm from './Form.vue';
const route = useRoute();
</script>
