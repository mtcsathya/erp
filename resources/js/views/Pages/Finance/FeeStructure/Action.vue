<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_structure.fee_structure'), path: 'FinanceFeeStructureList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeStructure" :title="$trans('finance.fee_structure.fee_structure')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceFeeStructureForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceFeeStructureForm from './Form.vue';
const route = useRoute();
</script>
