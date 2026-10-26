<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.department.department'), path: 'AcademicDepartmentList' },
    ]"
  >
    <PageHeaderAction
      name="AcademicDepartment"
      :title="$trans('academic.department.department')"
      :actions="['list']"
    />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicDepartmentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicDepartmentForm from './Form.vue';

const route = useRoute();
</script>
