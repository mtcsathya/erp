<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.fee_refund.fee_refund'), path: 'StudentFeeRefundList' },
    ]"
  >
    <PageHeaderAction name="StudentFeeRefund" :title="$trans('student.fee_refund.fee_refund')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentFeeRefundForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentFeeRefundForm from './Form.vue';
const route = useRoute();
</script>
