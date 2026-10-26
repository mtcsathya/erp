<template>
  <div class="text-center">
    <p class="text-6xl font-bold text-white">{{ type }}</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{{ title }}</h1>
    <p class="mt-6 text-base leading-7 text-gray-300">{{ description }}</p>
    <div class="mt-10 flex items-center justify-center gap-x-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
    type: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
});
</script>
