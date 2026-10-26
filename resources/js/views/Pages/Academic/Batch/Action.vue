<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.batch.batch'), path: 'AcademicBatchList' },
    ]"
  >
    <PageHeaderAction name="AcademicBatch" :title="$trans('academic.batch.batch')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicBatchForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicBatchForm from './Form.vue';
const route = useRoute();
</script>
