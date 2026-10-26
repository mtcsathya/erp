<template>
  <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt v-if="label" class="text-sm font-medium text-gray-500">{{ label }}</dt>
    <dd class="mt-1 text-sm text-gray-900 dark:text-gray-400 sm:col-span-2 sm:mt-0" :class="{ truncate: truncate, 'text-right': align === 'right' }">
      <slot />
    </dd>
  </div>
</template>

<script setup>
defineProps({
    label: { type: String, default: '' },
    align: { type: String, default: 'left' },
    truncate: { type: Boolean, default: true },
    html: { type: Boolean, default: false },
    dynamic: { type: Boolean, default: false },
});
</script>
