<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.qualification.qualification'), path: 'EmployeeQualificationList' },
    ]"
  >
    <PageHeaderAction name="EmployeeQualification" :title="$trans('employee.qualification.qualification')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeQualificationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeQualificationForm from './Form.vue';
const route = useRoute();
</script>
