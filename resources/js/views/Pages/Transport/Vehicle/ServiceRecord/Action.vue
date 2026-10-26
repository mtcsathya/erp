<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.service_record.service_record'), path: 'TransportVehicleServiceRecordList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleServiceRecord" :title="$trans('transport.vehicle.service_record.service_record')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleServiceRecordForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleServiceRecordForm from './Form.vue';
const route = useRoute();
</script>
