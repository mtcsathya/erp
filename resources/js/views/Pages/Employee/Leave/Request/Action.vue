<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.leave.request.request'), path: 'EmployeeLeaveRequestList' },
    ]"
  >
    <PageHeaderAction name="EmployeeLeaveRequest" :title="$trans('employee.leave.request.request')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeLeaveRequestForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeLeaveRequestForm from './Form.vue';
const route = useRoute();
</script>
