<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.program_incharge.program_incharge'), path: 'AcademicProgramInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicProgramIncharge" :title="$trans('academic.program_incharge.program_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicProgramInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicProgramInchargeForm from './Form.vue';
const route = useRoute();
</script>
