<template>
  <button
    @click="$emit('click', $event)"
    class="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <i v-if="icon" :class="icon" class="mr-3 w-4 text-gray-400"></i>
    <slot />
  </button>
</template>

<script setup>
defineProps({
    icon: { type: String, default: '' },
});
defineEmits(['click']);
</script>
