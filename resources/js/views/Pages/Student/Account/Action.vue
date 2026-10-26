<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.account.account'), path: 'StudentAccountList' },
    ]"
  >
    <PageHeaderAction name="StudentAccount" :title="$trans('student.account.account')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentAccountForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentAccountForm from './Form.vue';
const route = useRoute();
</script>
