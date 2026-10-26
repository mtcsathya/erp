<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('library.library'), path: 'Library' },
      { label: $trans('library.transaction.transaction'), path: 'LibraryTransactionList' },
    ]"
  >
    <PageHeaderAction name="LibraryTransaction" :title="$trans('library.transaction.transaction')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <LibraryTransactionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import LibraryTransactionForm from './Form.vue';
const route = useRoute();
</script>
