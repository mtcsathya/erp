<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.fee.fee'), path: 'TransportFeeList' },
    ]"
  >
    <PageHeaderAction name="TransportFee" :title="$trans('transport.fee.fee')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportFeeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportFeeForm from './Form.vue';
const route = useRoute();
</script>
