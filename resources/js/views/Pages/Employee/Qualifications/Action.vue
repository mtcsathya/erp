<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.qualifications.qualifications'), path: 'EmployeeQualificationsList' },
    ]"
  >
    <PageHeaderAction name="EmployeeQualifications" :title="$trans('employee.qualifications.qualifications')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeQualificationsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeQualificationsForm from './Form.vue';
const route = useRoute();
</script>
