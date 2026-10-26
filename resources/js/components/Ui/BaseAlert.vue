<template>
  <div
    class="rounded-md p-4"
    :class="designClasses"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <i :class="iconClass"></i>
      </div>
      <div class="ml-3" :class="{ 'text-sm': size === 'xs' }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    design: { type: String, default: 'info' },
    size: { type: String, default: 'md' },
});

const designClasses = computed(() => ({
    'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300': props.design === 'info',
    'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300': props.design === 'success',
    'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300': props.design === 'warning',
    'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300': props.design === 'danger',
}));

const iconClass = computed(() => ({
    'fas fa-info-circle text-blue-400': props.design === 'info',
    'fas fa-check-circle text-green-400': props.design === 'success',
    'fas fa-exclamation-triangle text-yellow-400': props.design === 'warning',
    'fas fa-times-circle text-red-400': props.design === 'danger',
}));
</script>
