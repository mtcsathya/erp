<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('mess.mess'), path: 'Mess' },
      { label: $trans('mess.meal.meal'), path: 'MessMealList' },
    ]"
  >
    <PageHeaderAction name="MessMeal" :title="$trans('mess.meal.meal')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <MessMealForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MessMealForm from './Form.vue';
const route = useRoute();
</script>
