<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.qualification.qualification'), path: 'StudentQualificationList' },
    ]"
  >
    <PageHeaderAction name="StudentQualification" :title="$trans('student.qualification.qualification')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentQualificationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentQualificationForm from './Form.vue';
const route = useRoute();
</script>
