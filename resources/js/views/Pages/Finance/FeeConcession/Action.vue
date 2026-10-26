<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_concession.fee_concession'), path: 'FinanceFeeConcessionList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeConcession" :title="$trans('finance.fee_concession.fee_concession')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceFeeConcessionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceFeeConcessionForm from './Form.vue';
const route = useRoute();
</script>
