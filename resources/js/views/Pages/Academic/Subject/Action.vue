<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.subject.subject'), path: 'AcademicSubjectList' },
    ]"
  >
    <PageHeaderAction name="AcademicSubject" :title="$trans('academic.subject.subject')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicSubjectForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicSubjectForm from './Form.vue';
const route = useRoute();
</script>
