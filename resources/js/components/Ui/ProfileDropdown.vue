<template>
  <div class="relative" ref="dropdownRef">
    <button @click="isOpen = !isOpen" class="flex items-center space-x-2 text-white focus:outline-none">
      <img v-if="user?.avatar" :src="user.avatar" class="h-8 w-8 rounded-full" />
      <span v-else class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-sm text-white">
        {{ (user?.name || '?').charAt(0).toUpperCase() }}
      </span>
    </button>
    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-dark-header shadow-lg ring-1 ring-black/5 py-1 z-50">
      <router-link :to="{ name: 'UserProfile' }" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
        {{ $trans('user.profile.profile') }}
      </router-link>
      <router-link :to="{ name: 'UserPassword' }" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
        {{ $trans('user.change_password') }}
      </router-link>
      <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
        {{ $trans('auth.login.logout') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const isOpen = ref(false);
const dropdownRef = ref(null);
const user = computed(() => store.getters['auth/user']);

const logout = async () => {
    try {
        await store.dispatch('auth/user/logout');
        router.push({ name: 'Login' });
    } catch (e) {}
};

const handleClickOutside = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) isOpen.value = false;
};
onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>
