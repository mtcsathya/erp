<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.competency.competency'), path: 'ExamCompetencyList' },
    ]"
  >
    <PageHeaderAction name="ExamCompetency" :title="$trans('exam.competency.competency')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamCompetencyForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamCompetencyForm from './Form.vue';
const route = useRoute();
</script>
