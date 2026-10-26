<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.qualifications.qualifications'), path: 'StudentQualificationsList' },
    ]"
  >
    <PageHeaderAction name="StudentQualifications" :title="$trans('student.qualifications.qualifications')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentQualificationsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentQualificationsForm from './Form.vue';
const route = useRoute();
</script>
