<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.schedule.schedule'), path: 'ExamScheduleList' },
    ]"
  >
    <PageHeaderAction name="ExamSchedule" :title="$trans('exam.schedule.schedule')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ExamScheduleForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ExamScheduleForm from './Form.vue';
const route = useRoute();
</script>
