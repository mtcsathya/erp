<template>
  <div class="relative" ref="notifRef">
    <button @click="isOpen = !isOpen" class="relative text-white">
      <i class="far fa-bell"></i>
      <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
        {{ unreadCount > 9 ? '9+' : unreadCount }}
      </span>
    </button>
    <div v-if="isOpen" class="absolute right-0 mt-2 w-80 rounded-md bg-white dark:bg-dark-header shadow-lg ring-1 ring-black/5 z-50">
      <div class="border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex justify-between items-center">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $trans('notification.notification') }}</span>
        <button v-if="unreadCount > 0" @click="markAllRead" class="text-xs text-primary-600">{{ $trans('notification.mark_all_as_read') }}</button>
      </div>
      <div class="max-h-64 overflow-y-auto">
        <div v-for="n in notifications" :key="n.uuid" class="px-4 py-2 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm">
          {{ n.message || n.title }}
        </div>
        <div v-if="!notifications.length" class="px-4 py-4 text-center text-sm text-gray-500">
          {{ $trans('notification.no_notifications') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isOpen = ref(false);
const notifRef = ref(null);
const notifications = computed(() => store.state.notification?.notifications || []);
const unreadCount = computed(() => store.state.notification?.unreadCount || 0);

const markAllRead = () => store.dispatch('notification/markAllAsRead');

const handleClickOutside = (e) => {
    if (notifRef.value && !notifRef.value.contains(e.target)) isOpen.value = false;
};
onMounted(() => { store.dispatch('notification/list'); document.addEventListener('click', handleClickOutside); });
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>
