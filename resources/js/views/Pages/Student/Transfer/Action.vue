<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.transfer.transfer'), path: 'StudentTransferList' },
    ]"
  >
    <PageHeaderAction name="StudentTransfer" :title="$trans('student.transfer.transfer')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentTransferForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentTransferForm from './Form.vue';
const route = useRoute();
</script>
