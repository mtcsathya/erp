<template>
  <nav class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
    <ul class="space-y-1">
      <li v-for="item in items" :key="item.name">
        <router-link
          :to="{ name: item.name }"
          class="block px-3 py-2 text-sm font-medium rounded-md transition-colors"
          :class="isActive(item.name) ? 'bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

defineProps({
    items: { type: Array, default: () => [] },
});

const route = useRoute();

function isActive(name) {
    return route.name === name;
}
</script>
