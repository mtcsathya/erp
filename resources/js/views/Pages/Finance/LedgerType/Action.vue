<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.ledger_type.ledger_type'), path: 'FinanceLedgerTypeList' },
    ]"
  >
    <PageHeaderAction name="FinanceLedgerType" :title="$trans('finance.ledger_type.ledger_type')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceLedgerTypeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceLedgerTypeForm from './Form.vue';
const route = useRoute();
</script>
