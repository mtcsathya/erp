<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_structure_component.fee_structure_component'), path: 'FinanceFeeStructureComponentList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeStructureComponent" :title="$trans('finance.fee_structure_component.fee_structure_component')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceFeeStructureComponentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceFeeStructureComponentForm from './Form.vue';
const route = useRoute();
</script>
