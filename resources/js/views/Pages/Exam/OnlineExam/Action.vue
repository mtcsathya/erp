<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.online_exam.online_exam'), path: 'ExamOnlineExamList' },
    ]"
  >
    <PageHeaderAction name="ExamOnlineExam" :title="$trans('exam.online_exam.online_exam')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamOnlineExamForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamOnlineExamForm from './Form.vue';
const route = useRoute();
</script>
