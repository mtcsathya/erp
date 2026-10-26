<template>
  <div class="dark:bg-dark-header rounded-lg bg-white shadow-sm">
    <div v-if="$slots.title || $slots.action" class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
        <slot name="title" />
      </h3>
      <div class="flex items-center space-x-2">
        <slot name="action" />
      </div>
    </div>
    <BaseLoader :is-loading="isLoading">
      <div class="p-4">
        <slot />
      </div>
    </BaseLoader>
  </div>
</template>

<script setup>
defineProps({
    isLoading: { type: Boolean, default: false },
});
</script>
