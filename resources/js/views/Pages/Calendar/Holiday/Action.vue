<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('calendar.calendar'), path: 'Calendar' },
      { label: $trans('calendar.holiday.holiday'), path: 'CalendarHolidayList' },
    ]"
  >
    <PageHeaderAction name="CalendarHoliday" :title="$trans('calendar.holiday.holiday')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CalendarHolidayForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CalendarHolidayForm from './Form.vue';
const route = useRoute();
</script>
