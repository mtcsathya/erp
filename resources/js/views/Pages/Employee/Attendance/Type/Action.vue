<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.type.type'), path: 'EmployeeAttendanceTypeList' },
    ]"
  >
    <PageHeaderAction name="EmployeeAttendanceType" :title="$trans('employee.type.type')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeAttendanceTypeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeAttendanceTypeForm from './Form.vue';
const route = useRoute();
</script>
