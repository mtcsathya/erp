<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.division.division'), path: 'AcademicDivisionList' },
    ]"
  >
    <PageHeaderAction name="AcademicDivision" :title="$trans('academic.division.division')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicDivisionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicDivisionForm from './Form.vue';
const route = useRoute();
</script>
