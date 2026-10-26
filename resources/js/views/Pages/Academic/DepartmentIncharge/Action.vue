<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.department_incharge.department_incharge'), path: 'AcademicDepartmentInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicDepartmentIncharge" :title="$trans('academic.department_incharge.department_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicDepartmentInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicDepartmentInchargeForm from './Form.vue';
const route = useRoute();
</script>
