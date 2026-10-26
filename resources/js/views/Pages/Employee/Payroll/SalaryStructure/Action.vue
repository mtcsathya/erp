<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.payroll.salary_structure.salary_structure'), path: 'EmployeePayrollSalaryStructureList' },
    ]"
  >
    <PageHeaderAction name="EmployeePayrollSalaryStructure" :title="$trans('employee.payroll.salary_structure.salary_structure')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeePayrollSalaryStructureForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeePayrollSalaryStructureForm from './Form.vue';
const route = useRoute();
</script>
