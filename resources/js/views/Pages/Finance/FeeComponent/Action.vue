<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_component.fee_component'), path: 'FinanceFeeComponentList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeComponent" :title="$trans('finance.fee_component.fee_component')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceFeeComponentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceFeeComponentForm from './Form.vue';
const route = useRoute();
</script>
