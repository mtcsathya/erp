<template>
  <div class="flex items-center">
    <input
      :id="name"
      type="checkbox"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500"
    />
    <label v-if="label" :for="name" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
defineProps({
    modelValue: { type: Boolean, default: false },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
});

defineEmits(['update:modelValue']);
</script>
