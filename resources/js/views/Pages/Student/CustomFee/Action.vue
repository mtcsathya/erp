<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.custom_fee.custom_fee'), path: 'StudentCustomFeeList' },
    ]"
  >
    <PageHeaderAction name="StudentCustomFee" :title="$trans('student.custom_fee.custom_fee')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentCustomFeeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentCustomFeeForm from './Form.vue';
const route = useRoute();
</script>
