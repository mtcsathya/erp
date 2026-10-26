<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.department.department'), path: 'EmployeeDepartmentList' },
    ]"
  >
    <PageHeaderAction name="EmployeeDepartment" :title="$trans('employee.department.department')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeDepartmentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeDepartmentForm from './Form.vue';
const route = useRoute();
</script>
