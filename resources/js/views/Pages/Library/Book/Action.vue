<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('library.library'), path: 'Library' },
      { label: $trans('library.book.book'), path: 'LibraryBookList' },
    ]"
  >
    <PageHeaderAction name="LibraryBook" :title="$trans('library.book.book')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <LibraryBookForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import LibraryBookForm from './Form.vue';
const route = useRoute();
</script>
