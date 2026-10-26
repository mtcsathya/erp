<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';
const props = defineProps({
    name: { type: String, required: true },
    label: { type: String, default: '' },
});
const activeTab = inject('activeTab', null);
const isActive = computed(() => activeTab?.value === props.name);
</script>
