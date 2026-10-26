<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.program_type.program_type'), path: 'AcademicProgramTypeList' },
    ]"
  >
    <PageHeaderAction name="AcademicProgramType" :title="$trans('academic.program_type.program_type')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicProgramTypeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicProgramTypeForm from './Form.vue';
const route = useRoute();
</script>
