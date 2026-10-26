<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('blog.blog'), path: 'Blog' },
      { label: $trans('blog.blog'), path: 'BlogList' },
    ]"
  >
    <PageHeaderAction name="Blog" :title="$trans('blog.blog')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <BlogForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BlogForm from './Form.vue';
const route = useRoute();
</script>
