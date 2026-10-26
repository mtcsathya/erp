<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
        <div class="fixed inset-0 bg-gray-500/25" @click="closeSearch"></div>
        <div class="relative mx-auto max-w-xl transform rounded-xl bg-white dark:bg-dark-header shadow-2xl ring-1 ring-black/5">
          <div class="flex items-center px-4">
            <i class="fas fa-search text-gray-400 mr-3"></i>
            <input
              ref="searchInput"
              v-model="query"
              type="text"
              class="h-12 w-full border-0 bg-transparent text-gray-800 dark:text-gray-200 focus:ring-0 sm:text-sm"
              :placeholder="$trans('global.search')"
              @keydown.esc="closeSearch"
            />
          </div>
          <div v-if="results.length" class="max-h-72 overflow-y-auto border-t border-gray-200 dark:border-gray-700 py-2">
            <button
              v-for="result in results"
              :key="result.name"
              @click="navigateTo(result)"
              class="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i v-if="result.icon" :class="result.icon" class="mr-3 w-5 text-gray-400"></i>
              {{ result.label }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = ref(false);
const query = ref('');
const results = ref([]);
const searchInput = ref(null);

const openSearch = () => {
    isOpen.value = true;
    nextTick(() => searchInput.value?.focus());
};
const closeSearch = () => { isOpen.value = false; query.value = ''; results.value = []; };

const navigateTo = (result) => {
    closeSearch();
    router.push({ name: result.name });
};

watch(query, (val) => {
    // Search through route names - in production this would search the navigation store
    results.value = [];
});

defineExpose({ openSearch, closeSearch });
</script>
