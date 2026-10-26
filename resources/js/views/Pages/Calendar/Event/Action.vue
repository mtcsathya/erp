<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('calendar.calendar'), path: 'Calendar' },
      { label: $trans('calendar.event.event'), path: 'CalendarEventList' },
    ]"
  >
    <PageHeaderAction name="CalendarEvent" :title="$trans('calendar.event.event')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CalendarEventForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CalendarEventForm from './Form.vue';
const route = useRoute();
</script>
