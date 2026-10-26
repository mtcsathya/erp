<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.dialogue.dialogue'), path: 'EmployeeDialogueList' },
    ]"
  >
    <PageHeaderAction name="EmployeeDialogue" :title="$trans('employee.dialogue.dialogue')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <EmployeeDialogueForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import EmployeeDialogueForm from './Form.vue';
const route = useRoute();
</script>
