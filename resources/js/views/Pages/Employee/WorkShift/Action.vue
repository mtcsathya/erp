<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.work_shift.work_shift'), path: 'EmployeeWorkShiftList' },
    ]"
  >
    <PageHeaderAction name="EmployeeWorkShift" :title="$trans('employee.work_shift.work_shift')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeWorkShiftForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeWorkShiftForm from './Form.vue';
const route = useRoute();
</script>
