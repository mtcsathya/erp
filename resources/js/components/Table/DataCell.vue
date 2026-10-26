<template>
  <!-- Desktop cell -->
  <td
    v-if="isVisible"
    class="hidden md:table-cell py-2 sm:px-2 xl:px-4"
    :class="{
      'dark:bg-dark-header': true,
      'sticky-column bg-white dark:bg-dark-body': stickyColumn,
      'cursor-pointer': clickable,
      'opacity-50': disabled,
      'border-l border-gray-200 dark:border-gray-700': bordered,
      'p-0': noPadding,
    }"
    :colspan="colspan"
    @click="clickable ? $emit('click', $event) : null"
  >
    <div class="text-sm" :class="{ 'font-semibold': isHeading || isFooter, 'text-gray-900 dark:text-gray-400': true }">
      <slot />
    </div>
  </td>

  <!-- Mobile cell -->
  <div
    v-if="isVisible && !noResponsive"
    class="text-sm text-gray-900 dark:text-gray-400 md:hidden"
  >
    <div v-if="cellLabel" class="flex justify-between px-4 py-1">
      <span class="text-xs font-medium text-gray-500">{{ cellLabel }}</span>
      <span><slot /></span>
    </div>
    <div v-else class="px-4 py-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    hasLabel: { type: Boolean, default: false },
    noResponsive: { type: Boolean, default: false },
    colspan: { type: Number, default: 1 },
    table: { type: Boolean, default: false },
    isHeading: { type: Boolean, default: false },
    stickyColumn: { type: Boolean, default: false },
    isFooter: { type: Boolean, default: false },
    align: { type: String, default: 'left' },
    bordered: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
    clickable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
});

defineEmits(['click']);

const Header = inject('Header', null);

const isVisible = computed(() => {
    if (!props.name || !Header?.value) return true;
    const col = Header.value.find(h => h.key === props.name);
    return !col || col.visibility !== false;
});

const cellLabel = computed(() => {
    if (props.label) return props.label;
    if (props.name && Header?.value) {
        const col = Header.value.find(h => h.key === props.name);
        return col?.label || '';
    }
    return '';
});
</script>
