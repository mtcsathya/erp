<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.batch_incharge.batch_incharge'), path: 'AcademicBatchInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicBatchIncharge" :title="$trans('academic.batch_incharge.batch_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicBatchInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicBatchInchargeForm from './Form.vue';
const route = useRoute();
</script>
