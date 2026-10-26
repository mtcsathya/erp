<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.fuel_record.fuel_record'), path: 'TransportVehicleFuelRecordList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleFuelRecord" :title="$trans('transport.vehicle.fuel_record.fuel_record')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleFuelRecordForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleFuelRecordForm from './Form.vue';
const route = useRoute();
</script>
