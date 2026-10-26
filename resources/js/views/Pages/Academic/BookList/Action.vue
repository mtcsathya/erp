<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.book_list.book_list'), path: 'AcademicBookListList' },
    ]"
  >
    <PageHeaderAction name="AcademicBookList" :title="$trans('academic.book_list.book_list')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicBookListForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicBookListForm from './Form.vue';
const route = useRoute();
</script>
