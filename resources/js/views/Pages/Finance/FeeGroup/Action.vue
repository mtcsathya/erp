<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_group.fee_group'), path: 'FinanceFeeGroupList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeGroup" :title="$trans('finance.fee_group.fee_group')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceFeeGroupForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceFeeGroupForm from './Form.vue';
const route = useRoute();
</script>
