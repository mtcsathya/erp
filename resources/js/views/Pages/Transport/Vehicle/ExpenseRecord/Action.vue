<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.vehicle.expense_record.expense_record'), path: 'TransportVehicleExpenseRecordList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleExpenseRecord" :title="$trans('transport.vehicle.expense_record.expense_record')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportVehicleExpenseRecordForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportVehicleExpenseRecordForm from './Form.vue';
const route = useRoute();
</script>
