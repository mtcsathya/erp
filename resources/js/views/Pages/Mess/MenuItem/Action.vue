<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('mess.mess'), path: 'Mess' },
      { label: $trans('mess.menu_item.menu_item'), path: 'MessMenuItemList' },
    ]"
  >
    <PageHeaderAction name="MessMenuItem" :title="$trans('mess.menu_item.menu_item')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <MessMenuItemForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MessMenuItemForm from './Form.vue';
const route = useRoute();
</script>
