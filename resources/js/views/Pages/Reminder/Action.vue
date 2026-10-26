<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reminder.reminder'), path: 'Reminder' },
      { label: $trans('reminder.reminder'), path: 'ReminderList' },
    ]"
  >
    <PageHeaderAction name="Reminder" :title="$trans('reminder.reminder')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReminderForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReminderForm from './Form.vue';
const route = useRoute();
</script>
