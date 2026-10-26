<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.grade.grade'), path: 'ExamGradeList' },
    ]"
  >
    <PageHeaderAction name="ExamGrade" :title="$trans('exam.grade.grade')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamGradeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamGradeForm from './Form.vue';
const route = useRoute();
</script>
