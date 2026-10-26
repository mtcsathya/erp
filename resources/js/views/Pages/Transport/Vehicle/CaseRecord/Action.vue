<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.case_record.case_record'), path: 'TransportVehicleCaseRecordList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleCaseRecord" :title="$trans('transport.vehicle.case_record.case_record')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleCaseRecordForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleCaseRecordForm from './Form.vue';
const route = useRoute();
</script>
