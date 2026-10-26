<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.document.document'), path: 'EmployeeDocumentList' },
    ]"
  >
    <PageHeaderAction name="EmployeeDocument" :title="$trans('employee.document.document')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeDocumentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeDocumentForm from './Form.vue';
const route = useRoute();
</script>
