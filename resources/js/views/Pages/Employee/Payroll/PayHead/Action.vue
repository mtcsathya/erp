<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.pay_head.pay_head'), path: 'EmployeePayrollPayHeadList' },
    ]"
  >
    <PageHeaderAction name="EmployeePayrollPayHead" :title="$trans('employee.pay_head.pay_head')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeePayrollPayHeadForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeePayrollPayHeadForm from './Form.vue';
const route = useRoute();
</script>
