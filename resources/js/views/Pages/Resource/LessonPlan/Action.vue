<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.lesson_plan.lesson_plan'), path: 'ResourceLessonPlanList' },
    ]"
  >
    <PageHeaderAction name="ResourceLessonPlan" :title="$trans('resource.lesson_plan.lesson_plan')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ResourceLessonPlanForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ResourceLessonPlanForm from './Form.vue';
const route = useRoute();
</script>
