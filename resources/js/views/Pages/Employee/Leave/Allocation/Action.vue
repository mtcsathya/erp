<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.leave.allocation.allocation'), path: 'EmployeeLeaveAllocationList' },
    ]"
  >
    <PageHeaderAction name="EmployeeLeaveAllocation" :title="$trans('employee.leave.allocation.allocation')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeLeaveAllocationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeLeaveAllocationForm from './Form.vue';
const route = useRoute();
</script>
