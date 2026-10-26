<template>
  <div class="mb-4">
    <!-- Breadcrumb navigation -->
    <nav class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2" v-if="navs && navs.length">
      <template v-for="(nav, index) in navs" :key="index">
        <router-link v-if="nav.path" :to="{ name: nav.path }" class="hover:text-gray-700 dark:hover:text-gray-200">
          {{ nav.label }}
        </router-link>
        <span v-else>{{ nav.label }}</span>
        <span v-if="index < navs.length - 1" class="mx-2">/</span>
      </template>
    </nav>

    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {{ title }}
      </h1>
      <div class="flex items-center space-x-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    title: { type: String, default: '' },
    navs: { type: Array, default: () => [] },
});
</script>
