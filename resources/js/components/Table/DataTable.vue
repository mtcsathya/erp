<template>
  <template v-if="meta.total > 0">
    <BaseCard no-padding no-content-padding>
      <!-- Slot for alerts/actions above table -->
      <slot name="alert" />
      <slot name="actions" />

      <div class="scroller-thin-x">
        <!-- Desktop table -->
        <table class="rounded-table hidden min-w-full divide-y divide-gray-200 dark:divide-gray-700 md:table">
          <thead class="bg-gray-50 dark:bg-neutral-700">
            <tr>
              <th
                v-for="col in visibleHeaders"
                :key="col.key"
                class="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 xl:px-4"
              >
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700">
            <slot />
          </tbody>
        </table>

        <!-- Mobile table -->
        <table class="min-w-full md:hidden">
          <tbody>
            <slot />
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <Pagination v-if="meta.lastPage > 1" :meta="meta" @refresh="$emit('refresh')" />
    </BaseCard>
  </template>

  <!-- Empty state -->
  <template v-else>
    <BaseCard>
      <div class="py-12 text-center">
        <i class="fas fa-list text-4xl text-gray-300"></i>
        <h3 class="mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ $trans(`${module}.${module.split('.').pop()}`) }}
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ $trans('general.errors.record_not_found') }}
        </p>
        <div class="mt-6">
          <slot name="actionButton" />
        </div>
      </div>
    </BaseCard>
  </template>
</template>

<script setup>
import { computed, provide } from 'vue';
import Pagination from './Pagination.vue';

const props = defineProps({
    header: { type: Array, default: () => [] },
    footer: { type: Array, default: () => [] },
    stickyColumns: { type: Array, default: () => [] },
    meta: { type: Object, default: () => ({ hasFooter: false, total: 0 }) },
    module: { type: String, default: '' },
    scroll: { type: Boolean, default: true },
    verticalAlign: { type: String, default: 'top' },
});

defineEmits(['refresh', 'toggleSelectAll', 'toggleGlobalSelect']);

const visibleHeaders = computed(() => {
    if (!props.header || !Array.isArray(props.header)) return [];
    return props.header.filter(h => h.visibility !== false);
});

// Provide header info to DataCell for column visibility and labels
provide('Header', computed(() => props.header));
provide('SubHeader', computed(() => []));
provide('VerticalAlign', computed(() => props.verticalAlign));
</script>
