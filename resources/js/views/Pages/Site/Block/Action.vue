<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('site.site'), path: 'Site' },
      { label: $trans('site.block.block'), path: 'SiteBlockList' },
    ]"
  >
    <PageHeaderAction name="SiteBlock" :title="$trans('site.block.block')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <SiteBlockForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import SiteBlockForm from './Form.vue';
const route = useRoute();
</script>
