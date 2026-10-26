<template>
  <PageHeader :title="$trans('global.assign')" :navs="[{ label: $trans('academic.academic'), path: 'Academic' }]" />
  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('global.assign') }}</template>
      <div class="p-4">
        <!-- Drag-and-drop assignment interface - reconstruct from beautified source -->
        <p class="text-gray-500">Assignment interface to be reconstructed.</p>
      </div>
    </BaseCard>
  </ParentTransition>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
