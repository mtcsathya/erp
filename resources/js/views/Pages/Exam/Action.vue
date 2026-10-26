<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.exam'), path: 'ExamList' },
    ]"
  >
    <PageHeaderAction name="Exam" :title="$trans('exam.exam')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamForm from './Form.vue';
const route = useRoute();
</script>
