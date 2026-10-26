<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.period.period'), path: 'AcademicPeriodList' },
    ]"
  >
    <PageHeaderAction name="AcademicPeriod" :title="$trans('academic.period.period')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicPeriodForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicPeriodForm from './Form.vue';
const route = useRoute();
</script>
