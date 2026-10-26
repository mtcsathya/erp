<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {{ label }}
    </label>
    <select
      :id="name"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
      class="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
      :class="{ 'border-red-500': error }"
    >
      <option value="">{{ placeholder || $trans('global.select') }}</option>
      <option
        v-for="option in options"
        :key="option[valueProp] || option"
        :value="option[valueProp] || option"
      >
        {{ option[labelProp] || option }}
      </option>
    </select>
    <p v-if="error" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
    modelValue: { type: [String, Number], default: '' },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    labelProp: { type: String, default: 'label' },
    valueProp: { type: String, default: 'value' },
    disabled: { type: Boolean, default: false },
    error: { type: String, default: '' },
});

defineEmits(['update:modelValue', 'update:error']);
</script>
