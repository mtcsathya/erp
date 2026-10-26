<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.document.document'), path: 'TransportVehicleDocumentList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleDocument" :title="$trans('transport.vehicle.document.document')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleDocumentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleDocumentForm from './Form.vue';
const route = useRoute();
</script>
