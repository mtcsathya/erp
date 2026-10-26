<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {{ label }}
    </label>
    <textarea
      :id="name"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
      :class="{ 'border-red-500': error }"
    ></textarea>
    <p v-if="error" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
    modelValue: { type: String, default: '' },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    rows: { type: Number, default: 3 },
    error: { type: String, default: '' },
});

defineEmits(['update:modelValue', 'update:error']);
</script>
