<template>
  <div v-if="isVisible" class="flex items-center text-white text-sm">
    <button @click="toggleClock" class="flex items-center space-x-1 hover:text-gray-200">
      <i :class="isClockedIn ? 'fas fa-stop-circle text-red-400' : 'fas fa-play-circle text-green-400'"></i>
      <span class="hidden sm:inline">{{ isClockedIn ? clockTime : $trans('student.timesheet.clock_in') }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

const store = useStore();
const isClockedIn = ref(false);
const clockTime = ref('00:00:00');
let timer = null;
let startTime = null;

const roles = computed(() => store.getters['auth/user']?.roles || []);
const isVisible = computed(() => roles.value.includes('student') || roles.value.includes('guardian'));

const updateClock = () => {
    if (!startTime) return;
    const diff = Math.floor((Date.now() - startTime) / 1000);
    const h = String(Math.floor(diff / 3600)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const s = String(diff % 60).padStart(2, '0');
    clockTime.value = `${h}:${m}:${s}`;
};

const toggleClock = async () => {
    try {
        if (isClockedIn.value) {
            await axios.post('/api/app/student/timesheets/clock-out');
            isClockedIn.value = false;
            clearInterval(timer);
        } else {
            await axios.post('/api/app/student/timesheets/clock-in');
            isClockedIn.value = true;
            startTime = Date.now();
            timer = setInterval(updateClock, 1000);
        }
    } catch (e) {}
};

onMounted(async () => {
    try {
        const { data } = await axios.get('/api/app/student/timesheets/status');
        if (data.isClockedIn) {
            isClockedIn.value = true;
            startTime = new Date(data.clockInAt).getTime();
            timer = setInterval(updateClock, 1000);
            updateClock();
        }
    } catch (e) {}
});

onUnmounted(() => { if (timer) clearInterval(timer); });
</script>
