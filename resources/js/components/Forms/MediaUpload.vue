<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ label }}</label>

    <!-- Existing files -->
    <div v-if="files.length" class="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-4">
      <div v-for="(file, index) in files" :key="index" class="relative group rounded-lg border border-gray-200 dark:border-gray-700 p-2">
        <img v-if="isImage(file)" :src="file.url || file" class="h-20 w-full rounded object-cover" />
        <div v-else class="flex h-20 items-center justify-center">
          <i class="fas fa-file text-2xl text-gray-400"></i>
        </div>
        <button @click="removeFile(index)"
          class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <!-- Upload area -->
    <div
      class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 cursor-pointer hover:border-primary-400"
      @click="$refs.fileInput.click()"
      @dragover.prevent
      @drop.prevent="onDrop"
    >
      <i class="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
      <p class="text-sm text-gray-500">{{ $trans('general.drag_drop_or_click') }}</p>
      <input ref="fileInput" type="file" :multiple="multiple" :accept="accept" class="hidden" @change="onFileChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const props = defineProps({
    modelValue: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    multiple: { type: Boolean, default: true },
    accept: { type: String, default: '*' },
    token: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);
const emitter = inject('emitter', null);
const files = ref([...props.modelValue]);

const isImage = (file) => {
    const url = file?.url || file;
    return typeof url === 'string' && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
};

const onFileChange = (e) => {
    addFiles(Array.from(e.target.files));
};

const onDrop = (e) => {
    addFiles(Array.from(e.dataTransfer.files));
};

const addFiles = (newFiles) => {
    files.value.push(...newFiles);
    emit('update:modelValue', files.value);
};

const removeFile = (index) => {
    files.value.splice(index, 1);
    emit('update:modelValue', files.value);
};

// Listen for reset
emitter?.on('resetFiles', () => {
    files.value = [];
    emit('update:modelValue', []);
});
</script>
