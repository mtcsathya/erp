<template>
  <router-link
    :to="to"
    class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
  >
    <slot />
  </router-link>
</template>

<script setup>
defineProps({
    to: { type: [String, Object], required: true },
});
</script>
