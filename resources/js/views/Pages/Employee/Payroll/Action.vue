<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.payroll.payroll'), path: 'EmployeePayrollList' },
    ]"
  >
    <PageHeaderAction name="EmployeePayroll" :title="$trans('employee.payroll.payroll')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeePayrollForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeePayrollForm from './Form.vue';
const route = useRoute();
</script>
