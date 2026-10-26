<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.accounts.accounts'), path: 'StudentAccountsList' },
    ]"
  >
    <PageHeaderAction name="StudentAccounts" :title="$trans('student.accounts.accounts')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentAccountsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentAccountsForm from './Form.vue';
const route = useRoute();
</script>
