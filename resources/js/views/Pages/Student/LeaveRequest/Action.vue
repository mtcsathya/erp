<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.leave_request.leave_request'), path: 'StudentLeaveRequestList' },
    ]"
  >
    <PageHeaderAction name="StudentLeaveRequest" :title="$trans('student.leave_request.leave_request')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentLeaveRequestForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentLeaveRequestForm from './Form.vue';
const route = useRoute();
</script>
