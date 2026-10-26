<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('news.news'), path: 'News' },
      { label: $trans('news.news'), path: 'NewsList' },
    ]"
  >
    <PageHeaderAction name="News" :title="$trans('news.news')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <NewsForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import NewsForm from './Form.vue';
const route = useRoute();
</script>
