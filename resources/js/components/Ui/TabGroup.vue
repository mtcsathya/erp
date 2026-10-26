<template>
  <div>
    <div class="border-b border-gray-200 dark:border-gray-700">
      <nav class="flex -mb-px space-x-4 overflow-x-auto" aria-label="Tabs">
        <button v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name"
          class="whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium"
          :class="activeTab === tab.name
            ? 'border-primary-500 text-primary-600'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'">
          {{ tab.label || tab.name }}
        </button>
      </nav>
    </div>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, useSlots } from 'vue';

const props = defineProps({
    tabs: { type: Array, default: () => [] },
    defaultTab: { type: String, default: '' },
});

const activeTab = ref(props.defaultTab || props.tabs[0]?.name || '');
provide('activeTab', activeTab);
</script>
