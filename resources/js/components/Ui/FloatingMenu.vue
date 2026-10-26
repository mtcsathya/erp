<template>
  <div class="relative" ref="menuRef">
    <button
      @click="isOpen = !isOpen"
      class="inline-flex items-center rounded-md p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
    >
      <i class="fas fa-ellipsis-vertical"></i>
    </button>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-md bg-white dark:bg-dark-header shadow-lg ring-1 ring-black ring-opacity-5 py-1"
        @click="isOpen = false"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const menuRef = ref(null);

const handleClickOutside = (e) => {
    if (menuRef.value && !menuRef.value.contains(e.target)) {
        isOpen.value = false;
    }
};

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>
