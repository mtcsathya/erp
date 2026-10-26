<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.tax.tax'), path: 'FinanceTaxList' },
    ]"
  >
    <PageHeaderAction name="FinanceTax" :title="$trans('finance.tax.tax')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceTaxForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceTaxForm from './Form.vue';
const route = useRoute();
</script>
