<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isOpen" class="fixed inset-0 z-40 lg:hidden">
        <div class="fixed inset-0 bg-gray-600/75" @click="close"></div>
        <div class="relative flex w-64 flex-col bg-primary dark:bg-dark-header h-full">
          <div class="flex items-center justify-end px-4 py-2">
            <button @click="close" class="text-white"><i class="fas fa-times text-lg"></i></button>
          </div>
          <nav class="flex-1 overflow-y-auto px-4">
            <AppNavigation />
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isOpen = computed(() => store.getters['layout/getMobileSidebar']);
const close = () => store.dispatch('layout/setMobileSidebar', false);
</script>
