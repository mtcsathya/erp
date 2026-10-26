<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('mess.mess'), path: 'Mess' },
      { label: $trans('mess.meal_log.meal_log'), path: 'MessMealLogList' },
    ]"
  >
    <PageHeaderAction name="MessMealLog" :title="$trans('mess.meal_log.meal_log')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <MessMealLogForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MessMealLogForm from './Form.vue';
const route = useRoute();
</script>
