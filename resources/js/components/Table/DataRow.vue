<template>
  <!-- Desktop row -->
  <tr
    class="dark:hover:bg-dark-body hover:bg-gray-100 hidden md:table-row cursor-pointer"
    :class="{
      'bg-gray-100 font-semibold dark:bg-neutral-600': isHeading,
      [textColor]: textColor,
    }"
    @dblclick="$emit('doubleClick', $event)"
  >
    <slot />
  </tr>

  <!-- Mobile row -->
  <div
    v-if="!noResponsive"
    class="dark:bg-dark-header dark:hover:bg-dark-body table-row hover:bg-gray-100 md:hidden"
    :class="{
      'bg-gray-100 font-semibold dark:bg-neutral-600': isHeading,
      'py-2': spacing,
    }"
    @dblclick="$emit('doubleClick', $event)"
  >
    <slot />
  </div>
</template>

<script setup>
import { provide } from 'vue';

const props = defineProps({
    noResponsive: { type: Boolean, default: false },
    isHeading: { type: Boolean, default: false },
    spacing: { type: Boolean, default: true },
    textColor: { type: String, default: '' },
});

defineEmits(['doubleClick']);

provide('TextColor', props.textColor);
</script>
