<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.service_request.service_request'), path: 'StudentServiceRequestList' },
    ]"
  >
    <PageHeaderAction name="StudentServiceRequest" :title="$trans('student.service_request.service_request')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentServiceRequestForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentServiceRequestForm from './Form.vue';
const route = useRoute();
</script>
