<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('task.task'), path: 'Task' },
      { label: $trans('task.task'), path: 'TaskList' },
    ]"
  >
    <PageHeaderAction name="Task" :title="$trans('task.task')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TaskForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TaskForm from './Form.vue';
const route = useRoute();
</script>
