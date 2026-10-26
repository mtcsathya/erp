<template>
  <button
    :type="type"
    :disabled="disabled || isLoading"
    class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors"
    :class="variantClasses"
    @click="$emit('click', $event)"
  >
    <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
});

defineEmits(['click']);

const variantClasses = computed(() => {
    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50',
        secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700 disabled:opacity-50',
        success: 'bg-green-600 text-white hover:bg-green-700 disabled:opacity-50',
    };
    return variants[props.variant] || variants.primary;
});
</script>
