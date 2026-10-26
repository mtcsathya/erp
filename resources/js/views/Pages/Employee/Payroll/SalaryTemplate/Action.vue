<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.salary_template.salary_template'), path: 'EmployeePayrollSalaryTemplateList' },
    ]"
  >
    <PageHeaderAction name="EmployeePayrollSalaryTemplate" :title="$trans('employee.salary_template.salary_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeePayrollSalaryTemplateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeePayrollSalaryTemplateForm from './Form.vue';
const route = useRoute();
</script>
