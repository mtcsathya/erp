<template>
  <div class="text-center mb-8">
    <img
      v-if="logo"
      :src="logo"
      :alt="title"
      class="mx-auto h-16 w-auto mb-4"
    />
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    logo: { type: String, default: '' },
});
</script>
