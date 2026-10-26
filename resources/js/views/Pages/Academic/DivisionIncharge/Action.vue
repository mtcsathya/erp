<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.division_incharge.division_incharge'), path: 'AcademicDivisionInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicDivisionIncharge" :title="$trans('academic.division_incharge.division_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicDivisionInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicDivisionInchargeForm from './Form.vue';
const route = useRoute();
</script>
