<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.transfer_request.transfer_request'), path: 'StudentTransferRequestList' },
    ]"
  >
    <PageHeaderAction name="StudentTransferRequest" :title="$trans('student.transfer_request.transfer_request')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentTransferRequestForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentTransferRequestForm from './Form.vue';
const route = useRoute();
</script>
