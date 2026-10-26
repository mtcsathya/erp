<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ label }}</label>
    <div class="flex items-center space-x-4">
      <div class="relative">
        <img v-if="preview" :src="preview" class="h-24 w-24 rounded-lg object-cover" />
        <div v-else class="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <i class="fas fa-image text-2xl text-gray-400"></i>
        </div>
      </div>
      <div>
        <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="onFileChange" />
        <BaseButton size="sm" @click="$refs.fileInput.click()">{{ $trans('general.upload') }}</BaseButton>
        <BaseButton v-if="preview" size="sm" design="danger" class="ml-2" @click="removeImage">
          <i class="fas fa-trash"></i>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    modelValue: { type: [String, File], default: '' },
    label: { type: String, default: '' },
    existingUrl: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);
const fileInput = ref(null);
const localPreview = ref('');

const preview = computed(() => localPreview.value || props.existingUrl || (typeof props.modelValue === 'string' ? props.modelValue : ''));

const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        localPreview.value = URL.createObjectURL(file);
        emit('update:modelValue', file);
    }
};

const removeImage = () => {
    localPreview.value = '';
    emit('update:modelValue', '');
};
</script>
