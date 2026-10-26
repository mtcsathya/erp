<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.assessment.assessment'), path: 'ExamAssessmentList' },
    ]"
  >
    <PageHeaderAction name="ExamAssessment" :title="$trans('exam.assessment.assessment')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamAssessmentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamAssessmentForm from './Form.vue';
const route = useRoute();
</script>
