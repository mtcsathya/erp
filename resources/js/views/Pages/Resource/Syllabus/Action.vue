<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.syllabus.syllabus'), path: 'ResourceSyllabusList' },
    ]"
  >
    <PageHeaderAction name="ResourceSyllabus" :title="$trans('resource.syllabus.syllabus')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ResourceSyllabusForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ResourceSyllabusForm from './Form.vue';
const route = useRoute();
</script>
