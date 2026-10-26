<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ label }}</label>
    <flat-pickr
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :config="flatpickrConfig"
      :name="name"
      class="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
      :class="{ 'border-red-500': error }"
    />
    <p v-if="error" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: { type: String, default: '' },
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    error: { type: String, default: '' },
    enableTime: { type: Boolean, default: false },
    dateFormat: { type: String, default: 'Y-m-d' },
    minDate: { type: String, default: '' },
    maxDate: { type: String, default: '' },
});

defineEmits(['update:modelValue', 'update:error']);

const flatpickrConfig = computed(() => ({
    dateFormat: props.dateFormat,
    enableTime: props.enableTime,
    minDate: props.minDate || undefined,
    maxDate: props.maxDate || undefined,
}));
</script>
