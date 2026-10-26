<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('library.library'), path: 'Library' },
      { label: $trans('library.book_addition.book_addition'), path: 'LibraryBookAdditionList' },
    ]"
  >
    <PageHeaderAction name="LibraryBookAddition" :title="$trans('library.book_addition.book_addition')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <LibraryBookAdditionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import LibraryBookAdditionForm from './Form.vue';
const route = useRoute();
</script>
