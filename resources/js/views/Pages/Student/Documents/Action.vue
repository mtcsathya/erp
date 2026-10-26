<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.documents.documents'), path: 'StudentDocumentsList' },
    ]"
  >
    <PageHeaderAction name="StudentDocuments" :title="$trans('student.documents.documents')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentDocumentsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentDocumentsForm from './Form.vue';
const route = useRoute();
</script>
