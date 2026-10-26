<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.timesheet.timesheet'), path: 'StudentTimesheetList' },
    ]"
  >
    <PageHeaderAction name="StudentTimesheet" :title="$trans('student.timesheet.timesheet')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentTimesheetForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentTimesheetForm from './Form.vue';
const route = useRoute();
</script>
