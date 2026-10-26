<template>
  <div class="flex items-center space-x-2">
    <select
      v-model="selectedSession"
      @change="onSessionChange"
      class="block rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-sm focus:ring-primary-500"
    >
      <option value="">{{ $trans('academic.session.session') }}</option>
      <option v-for="s in sessions" :key="s.uuid" :value="s.uuid">{{ s.name }}</option>
    </select>
    <select
      v-model="selectedPeriod"
      @change="onPeriodChange"
      class="block rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-sm focus:ring-primary-500"
    >
      <option value="">{{ $trans('academic.period.period') }}</option>
      <option v-for="p in filteredPeriods" :key="p.uuid" :value="p.uuid">{{ p.name }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

const store = useStore();
const sessions = ref([]);
const periods = ref([]);
const selectedSession = ref('');
const selectedPeriod = ref(store.getters['auth/user/currentPeriodId'] || '');

const filteredPeriods = computed(() =>
    selectedSession.value ? periods.value.filter(p => p.sessionUuid === selectedSession.value) : periods.value
);

const onSessionChange = () => { selectedPeriod.value = ''; };
const onPeriodChange = async () => {
    if (selectedPeriod.value) {
        await axios.post('/api/app/auth/switch-period', { period: selectedPeriod.value });
        window.location.reload();
    }
};

onMounted(async () => {
    try {
        const { data } = await axios.get('/api/app/academic/sessions', { params: { all: true } });
        sessions.value = data.data || data;
        const res = await axios.get('/api/app/academic/periods', { params: { all: true } });
        periods.value = res.data.data || res.data;
    } catch (e) {}
});
</script>
