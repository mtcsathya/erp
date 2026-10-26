<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.record.record'), path: 'EmployeeRecordList' },
    ]"
  >
    <PageHeaderAction name="EmployeeRecord" :title="$trans('employee.record.record')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeRecordForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeRecordForm from './Form.vue';
const route = useRoute();
</script>
