<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.vehicle'), path: 'TransportVehicleList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicle" :title="$trans('transport.vehicle.vehicle')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleForm from './Form.vue';
const route = useRoute();
</script>
