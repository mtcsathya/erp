<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.experiences.experiences'), path: 'EmployeeExperiencesList' },
    ]"
  >
    <PageHeaderAction name="EmployeeExperiences" :title="$trans('employee.experiences.experiences')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeExperiencesForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeExperiencesForm from './Form.vue';
const route = useRoute();
</script>
