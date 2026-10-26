<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_head.fee_head'), path: 'FinanceFeeHeadList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeHead" :title="$trans('finance.fee_head.fee_head')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceFeeHeadForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceFeeHeadForm from './Form.vue';
const route = useRoute();
</script>
