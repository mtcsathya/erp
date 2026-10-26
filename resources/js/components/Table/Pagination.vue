<template>
  <nav v-if="meta.lastPage > 1" class="flex items-center justify-between">
    <div class="text-sm text-gray-500 dark:text-gray-400">
      Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} results
    </div>
    <div class="flex space-x-1">
      <button
        v-for="page in pages"
        :key="page"
        @click="goToPage(page)"
        class="px-3 py-1 text-sm rounded-md"
        :class="page === meta.currentPage
          ? 'bg-primary-600 text-white'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
      >
        {{ page }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
    meta: { type: Object, required: true },
});

const emit = defineEmits(['pageChanged']);
const router = useRouter();
const route = useRoute();

const pages = computed(() => {
    const total = props.meta.lastPage || 1;
    const current = props.meta.currentPage || 1;
    const range = [];
    const start = Math.max(1, current - 2);
    const end = Math.min(total, current + 2);
    for (let i = start; i <= end; i++) range.push(i);
    return range;
});

const goToPage = (page) => {
    router.push({ query: { ...route.query, page } });
    emit('pageChanged', page);
};
</script>
