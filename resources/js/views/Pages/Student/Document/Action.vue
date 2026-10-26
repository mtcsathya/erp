<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.document.document'), path: 'StudentDocumentList' },
    ]"
  >
    <PageHeaderAction name="StudentDocument" :title="$trans('student.document.document')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentDocumentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentDocumentForm from './Form.vue';
const route = useRoute();
</script>
