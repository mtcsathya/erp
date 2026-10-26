<template>
  <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium" :class="designClasses">
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    label: { type: String, default: '' },
    design: { type: String, default: 'primary' },
});
const designClasses = computed(() => ({
    'bg-primary-100 text-primary-800': props.design === 'primary',
    'bg-green-100 text-green-800': props.design === 'success',
    'bg-yellow-100 text-yellow-800': props.design === 'warning',
    'bg-red-100 text-red-800': props.design === 'danger',
    'bg-blue-100 text-blue-800': props.design === 'info',
    'bg-gray-100 text-gray-800': props.design === 'secondary',
}));
</script>
