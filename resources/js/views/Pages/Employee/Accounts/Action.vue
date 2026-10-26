<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.accounts.accounts'), path: 'EmployeeAccountsList' },
    ]"
  >
    <PageHeaderAction name="EmployeeAccounts" :title="$trans('employee.accounts.accounts')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeAccountsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeAccountsForm from './Form.vue';
const route = useRoute();
</script>
