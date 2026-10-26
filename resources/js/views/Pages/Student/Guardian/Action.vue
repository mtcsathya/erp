<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.guardian.guardian'), path: 'StudentGuardianList' },
    ]"
  >
    <PageHeaderAction name="StudentGuardian" :title="$trans('student.guardian.guardian')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentGuardianForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentGuardianForm from './Form.vue';
const route = useRoute();
</script>
