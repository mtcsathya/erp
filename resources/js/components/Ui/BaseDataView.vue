<template>
  <div class="sm:col-span-1">
    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ label }}</dt>
    <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100" :class="{ 'whitespace-pre-wrap': paragraph }">
      <slot />
    </dd>
  </div>
</template>

<script setup>
defineProps({
    label: { type: String, default: '' },
    paragraph: { type: Boolean, default: false },
});
</script>
