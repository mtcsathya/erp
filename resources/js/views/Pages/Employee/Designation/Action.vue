<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.designation.designation'), path: 'EmployeeDesignationList' },
    ]"
  >
    <PageHeaderAction name="EmployeeDesignation" :title="$trans('employee.designation.designation')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeDesignationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeDesignationForm from './Form.vue';
const route = useRoute();
</script>
