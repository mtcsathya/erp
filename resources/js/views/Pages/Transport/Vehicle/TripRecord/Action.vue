<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.trip_record.trip_record'), path: 'TransportVehicleTripRecordList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleTripRecord" :title="$trans('transport.vehicle.trip_record.trip_record')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleTripRecordForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleTripRecordForm from './Form.vue';
const route = useRoute();
</script>
