<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('gallery.gallery'), path: 'Gallery' },
      { label: $trans('gallery.gallery'), path: 'GalleryList' },
    ]"
  >
    <PageHeaderAction name="Gallery" :title="$trans('gallery.gallery')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <GalleryForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import GalleryForm from './Form.vue';
const route = useRoute();
</script>
