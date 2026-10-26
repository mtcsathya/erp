<template>
  <div class="relative">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
    >
      <option value="">{{ $trans('global.select_period') }}</option>
      <option v-for="period in periods" :key="period.uuid" :value="period.uuid">
        {{ period.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

defineProps({
    modelValue: { type: String, default: '' },
});

defineEmits(['update:modelValue']);

const periods = ref([]);

onMounted(async () => {
    try {
        const { data } = await axios.get('/api/app/academic/periods');
        periods.value = data.data || data;
    } catch (e) {
        console.error('Failed to load periods', e);
    }
});
</script>
