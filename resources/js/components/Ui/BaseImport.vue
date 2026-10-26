<template>
  <BaseModal :show="visibility" @close="$emit('close')">
    <template #title>{{ $trans('general.import') }}</template>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $trans('general.select_file') }}</label>
        <input type="file" ref="fileInput" accept=".csv,.xlsx,.xls" @change="onFileChange"
          class="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-primary-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-700 hover:file:bg-primary-100" />
      </div>
      <BaseButton @click="uploadFile" :is-loading="isLoading">{{ $trans('general.import') }}</BaseButton>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    visibility: { type: Boolean, default: false },
    url: { type: String, required: true },
});
const emit = defineEmits(['close', 'imported']);

const store = useStore();
const isLoading = ref(false);
const file = ref(null);

const onFileChange = (e) => { file.value = e.target.files[0]; };

const uploadFile = async () => {
    if (!file.value) return;
    const formData = new FormData();
    formData.append('file', file.value);
    isLoading.value = true;
    try {
        await store.dispatch('moduleImport/upload', { url: props.url, form: formData });
        emit('imported');
        emit('close');
    } finally {
        isLoading.value = false;
    }
};
</script>
