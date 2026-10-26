<template>
  <BaseCard v-if="logs.length" no-padding no-content-padding>
    <template #title>{{ $trans('utility.activity_log.activity_log') }}</template>
    <div class="divide-y divide-gray-200 dark:divide-gray-700 max-h-64 overflow-y-auto">
      <div v-for="log in logs" :key="log.uuid" class="px-4 py-2 text-sm">
        <div class="flex justify-between">
          <span class="text-gray-700 dark:text-gray-300">{{ log.description }}</span>
          <span class="text-xs text-gray-400">{{ log.createdAt?.formatted }}</span>
        </div>
        <div v-if="log.user" class="text-xs text-gray-400">{{ log.user.name }}</div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    url: { type: String, required: true },
    uuid: { type: String, required: true },
});

const logs = ref([]);

onMounted(async () => {
    try {
        const { data } = await axios.get(`/api/${props.url}${props.uuid}/activity-logs`);
        logs.value = data.data || data;
    } catch (e) {}
});
</script>
