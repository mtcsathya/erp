<template>
  <PageHeader :title="$trans('global.edit')" :navs="[{ label: $trans('post.post'), path: 'Post' }]" />
  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('global.edit') }}</template>
      <!-- Rich editor - reconstruct from beautified source -->
      <div class="p-4"><p class="text-gray-500">Editor to be reconstructed.</p></div>
    </BaseCard>
  </ParentTransition>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
