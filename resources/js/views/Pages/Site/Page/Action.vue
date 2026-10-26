<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('site.site'), path: 'Site' },
      { label: $trans('site.page.page'), path: 'SitePageList' },
    ]"
  >
    <PageHeaderAction name="SitePage" :title="$trans('site.page.page')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <SitePageForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import SitePageForm from './Form.vue';
const route = useRoute();
</script>
