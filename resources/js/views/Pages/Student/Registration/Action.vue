<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.registration.registration'), path: 'StudentRegistrationList' },
    ]"
  >
    <PageHeaderAction name="StudentRegistration" :title="$trans('student.registration.registration')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentRegistrationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentRegistrationForm from './Form.vue';
const route = useRoute();
</script>
