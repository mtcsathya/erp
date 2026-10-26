<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.incharge.incharge'), path: 'TransportVehicleInchargeList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleIncharge" :title="$trans('transport.incharge.incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleInchargeForm from './Form.vue';
const route = useRoute();
</script>
