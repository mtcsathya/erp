<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.payment_method.payment_method'), path: 'FinancePaymentMethodList' },
    ]"
  >
    <PageHeaderAction name="FinancePaymentMethod" :title="$trans('finance.payment_method.payment_method')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinancePaymentMethodForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import FinancePaymentMethodForm from './Form.vue';
const route = useRoute();
</script>
