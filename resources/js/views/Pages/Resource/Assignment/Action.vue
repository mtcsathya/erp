<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.assignment.assignment'), path: 'ResourceAssignmentList' },
    ]"
  >
    <PageHeaderAction name="ResourceAssignment" :title="$trans('resource.assignment.assignment')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ResourceAssignmentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ResourceAssignmentForm from './Form.vue';
const route = useRoute();
</script>
