<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
    <h3 v-if="title" class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
    title: { type: String, default: '' },
});
</script>
