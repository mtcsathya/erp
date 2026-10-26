<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.gate_pass.gate_pass'), path: 'ReceptionGatePassList' },
    ]"
  >
    <PageHeaderAction name="ReceptionGatePass" :title="$trans('reception.gate_pass.gate_pass')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReceptionGatePassForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReceptionGatePassForm from './Form.vue';
const route = useRoute();
</script>
