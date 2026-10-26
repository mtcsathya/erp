<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button @click="isOpen = !isOpen"
      class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
      <slot name="title">{{ title }}</slot>
      <i :class="isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-gray-400"></i>
    </button>
    <Transition name="slide">
      <div v-show="isOpen" class="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({ title: { type: String, default: '' } });
const isOpen = ref(false);
</script>
