<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.day_closure.day_closure'), path: 'FinanceDayClosureList' },
    ]"
  >
    <PageHeaderAction name="FinanceDayClosure" :title="$trans('finance.day_closure.day_closure')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceDayClosureForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinanceDayClosureForm from './Form.vue';
const route = useRoute();
</script>
