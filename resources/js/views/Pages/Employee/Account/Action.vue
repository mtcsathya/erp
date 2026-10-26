<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.account.account'), path: 'EmployeeAccountList' },
    ]"
  >
    <PageHeaderAction name="EmployeeAccount" :title="$trans('employee.account.account')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeAccountForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeAccountForm from './Form.vue';
const route = useRoute();
</script>
