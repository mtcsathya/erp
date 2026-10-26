<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.term.term'), path: 'ExamTermList' },
    ]"
  >
    <PageHeaderAction name="ExamTerm" :title="$trans('exam.term.term')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamTermForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamTermForm from './Form.vue';
const route = useRoute();
</script>
