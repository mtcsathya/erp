<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ label }}</label>
    <QuillEditor
      v-model:content="content"
      content-type="html"
      theme="snow"
      :toolbar="toolbar"
      class="bg-white dark:bg-gray-700 rounded-md"
      :style="{ minHeight: '200px' }"
    />
    <p v-if="error" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps({
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    error: { type: String, default: '' },
    toolbar: { type: [Array, String], default: 'essential' },
});

const emit = defineEmits(['update:modelValue']);
const content = ref(props.modelValue);

watch(content, (val) => emit('update:modelValue', val));
watch(() => props.modelValue, (val) => { if (val !== content.value) content.value = val; });
</script>
