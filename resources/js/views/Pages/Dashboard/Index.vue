<template>
  <div class="bg-black px-4 pb-6 pt-6">
    <!-- Stats Section -->
    <DashboardStat />
  </div>

  <div class="space-y-4 mt-4">
    <!-- Charts Row -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <!-- Student Strength Chart -->
      <BaseFlexCard>
        <template #title>
          {{ studentChartTypes.find(t => t.name === selectedStudentChartType)?.label }}
        </template>
        <template #action>
          <DropdownMenu :label="studentChartTypes.find(t => t.name === selectedStudentChartType)?.label">
            <template v-for="type in studentChartTypes" :key="type.name">
              <DropdownItem v-if="type.name !== selectedStudentChartType" @click="loadStudentChart(type)">
                {{ type.label }}
              </DropdownItem>
            </template>
          </DropdownMenu>
        </template>
        <Bar v-if="studentChartData.labels" :data="studentChartData" :options="chartOptions" />
      </BaseFlexCard>

      <!-- Transaction Chart -->
      <BaseFlexCard>
        <template #title>
          {{ transactionChartTypes.find(t => t.name === selectedTransactionChartType)?.label }}
        </template>
        <template #action>
          <DropdownMenu :label="transactionChartTypes.find(t => t.name === selectedTransactionChartType)?.label">
            <template v-for="type in transactionChartTypes" :key="type.name">
              <DropdownItem v-if="type.name !== selectedTransactionChartType" @click="loadTransactionChart(type)">
                {{ type.label }}
              </DropdownItem>
            </template>
          </DropdownMenu>
        </template>
        <Bar v-if="transactionChartData.labels" :data="transactionChartData" :options="chartOptions" />
      </BaseFlexCard>
    </div>

    <!-- Schedule Calendar -->
    <DashboardScheduleCalendar />

    <!-- Feed & Student List -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DashboardFeed />
      <DashboardStudentList />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Bar } from 'vue-chartjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const store = useStore();
const isLoading = ref(false);

const studentChartTypes = [
    { name: 'course_wise_strength', label: 'Course Wise Strength' },
    { name: 'batch_wise_strength', label: 'Batch Wise Strength' },
];

const transactionChartTypes = [
    { name: 'transaction_summary', label: 'Transaction Summary' },
    { name: 'fee_collection_summary', label: 'Fee Collection Summary' },
];

const selectedStudentChartType = ref('course_wise_strength');
const selectedTransactionChartType = ref('transaction_summary');
const studentChartData = reactive({});
const transactionChartData = reactive({});

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } },
};

const loadStudentChart = async (type) => {
    selectedStudentChartType.value = type.name;
    isLoading.value = true;
    try {
        const data = await store.dispatch('dashboard/getStudentChartData', { type: type.name });
        Object.assign(studentChartData, data);
    } finally {
        isLoading.value = false;
    }
};

const loadTransactionChart = async (type) => {
    selectedTransactionChartType.value = type.name;
    isLoading.value = true;
    try {
        const data = await store.dispatch('dashboard/getTransactionChartData', { type: type.name });
        Object.assign(transactionChartData, data);
    } finally {
        isLoading.value = false;
    }
};

onMounted(async () => {
    await Promise.all([
        loadStudentChart(studentChartTypes[0]),
        loadTransactionChart(transactionChartTypes[0]),
    ]);
});
</script>

<script>
// Inline sub-components that are defined in the same bundle

// DashboardStat - stat cards across top
const DashboardStat = {
    name: 'DashboardStat',
    template: `
        <BaseFlexCard>
            <template #title>{{ $trans('dashboard.statistics') }}</template>
            <template #default>
                <div class="grid w-full grid-cols-1 gap-3 md:grid-cols-4 mt-4" v-if="stats.length">
                    <div v-for="stat in stats" :key="stat.title"
                        class="dark:bg-dark-header rounded-lg bg-white px-4 py-2 shadow">
                        <div class="flex items-center">
                            <div class="shrink-0">
                                <span class="text-2xl font-semibold leading-none text-gray-900 dark:text-gray-400 sm:text-3xl">
                                    {{ stat.count }}<span v-if="stat.subCount">/{{ stat.subCount }}</span>
                                </span>
                                <h3 class="mt-2 text-base font-normal uppercase text-gray-500">{{ stat.title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </BaseFlexCard>
    `,
    data() {
        return { stats: [], isLoading: false };
    },
    async mounted() {
        this.isLoading = true;
        try {
            const data = await this.$store.dispatch('dashboard/getStat');
            this.stats = data.stats || [];
        } finally {
            this.isLoading = false;
        }
    },
};

// DashboardScheduleCalendar - today's schedule
const DashboardScheduleCalendar = {
    name: 'DashboardScheduleCalendar',
    template: `<div></div>`,
};

// DashboardFeed - recent activity
const DashboardFeed = {
    name: 'DashboardFeed',
    template: `<div></div>`,
};

// DashboardStudentList - student listing
const DashboardStudentList = {
    name: 'DashboardStudentList',
    template: `<div></div>`,
};

export default {
    components: {
        DashboardStat,
        DashboardScheduleCalendar,
        DashboardFeed,
        DashboardStudentList,
    },
};
</script>
