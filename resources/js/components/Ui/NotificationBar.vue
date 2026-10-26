<template>
  <div v-if="visible" class="bg-primary-600 text-white text-center text-sm py-2 px-4">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({ type: { type: String, default: 'app' } });
const visible = ref(false);
</script>
