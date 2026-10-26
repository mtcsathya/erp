<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.program.program'), path: 'AcademicProgramList' },
    ]"
  >
    <PageHeaderAction name="AcademicProgram" :title="$trans('academic.program.program')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicProgramForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicProgramForm from './Form.vue';
const route = useRoute();
</script>
