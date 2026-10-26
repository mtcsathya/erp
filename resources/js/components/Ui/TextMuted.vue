<template>
  <component :is="block ? 'div' : 'span'" class="text-sm text-gray-500 dark:text-gray-400">
    <slot />
  </component>
</template>

<script setup>
defineProps({
    block: { type: Boolean, default: false },
});
</script>
