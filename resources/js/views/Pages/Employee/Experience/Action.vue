<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.experience.experience'), path: 'EmployeeExperienceList' },
    ]"
  >
    <PageHeaderAction name="EmployeeExperience" :title="$trans('employee.experience.experience')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeExperienceForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeExperienceForm from './Form.vue';
const route = useRoute();
</script>
