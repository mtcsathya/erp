<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.observation.observation'), path: 'ExamObservationList' },
    ]"
  >
    <PageHeaderAction name="ExamObservation" :title="$trans('exam.observation.observation')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamObservationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamObservationForm from './Form.vue';
const route = useRoute();
</script>
