<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.documents.documents'), path: 'EmployeeDocumentsList' },
    ]"
  >
    <PageHeaderAction name="EmployeeDocuments" :title="$trans('employee.documents.documents')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeDocumentsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeDocumentsForm from './Form.vue';
const route = useRoute();
</script>
