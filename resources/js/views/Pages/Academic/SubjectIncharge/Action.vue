<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.subject_incharge.subject_incharge'), path: 'AcademicSubjectInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicSubjectIncharge" :title="$trans('academic.subject_incharge.subject_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicSubjectInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicSubjectInchargeForm from './Form.vue';
const route = useRoute();
</script>
