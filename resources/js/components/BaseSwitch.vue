<template>
  <div class="flex items-center">
    <button
      type="button"
      :disabled="disabled"
      @click="$emit('update:modelValue', !modelValue)"
      class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      :class="modelValue ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-600'"
    >
      <span
        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        :class="modelValue ? 'translate-x-5' : 'translate-x-0'"
      />
    </button>
    <span v-if="label" class="ml-3 text-sm text-gray-700 dark:text-gray-300">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
});

defineEmits(['update:modelValue']);
</script>
