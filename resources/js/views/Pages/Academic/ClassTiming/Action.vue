<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.class_timing.class_timing'), path: 'AcademicClassTimingList' },
    ]"
  >
    <PageHeaderAction name="AcademicClassTiming" :title="$trans('academic.class_timing.class_timing')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicClassTimingForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicClassTimingForm from './Form.vue';
const route = useRoute();
</script>
