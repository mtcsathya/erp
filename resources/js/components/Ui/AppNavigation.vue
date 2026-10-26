<template>
  <ul class="space-y-1">
    <li v-for="nav in navigations" :key="nav.name">
      <router-link
        v-if="nav.path"
        :to="{ name: nav.path }"
        class="flex items-center rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
        :class="{ 'bg-white/10': isActive(nav.path) }"
      >
        <i v-if="nav.icon" :class="nav.icon" class="mr-3 w-5 text-center"></i>
        <span v-if="!mini">{{ nav.label }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

defineProps({ mini: { type: Boolean, default: false } });

const route = useRoute();
const store = useStore();

const navigations = computed(() => store.getters['navigation/navigations'] || []);
const isActive = (name) => route.name === name || route.name?.startsWith(name);
</script>
