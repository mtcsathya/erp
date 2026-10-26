<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('site.site'), path: 'Site' },
      { label: $trans('site.menu.menu'), path: 'SiteMenuList' },
    ]"
  >
    <PageHeaderAction name="SiteMenu" :title="$trans('site.menu.menu')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <SiteMenuForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import SiteMenuForm from './Form.vue';
const route = useRoute();
</script>
