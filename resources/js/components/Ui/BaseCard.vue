<template>
  <div class="relative space-y-6 lg:col-span-9 lg:px-0">
    <!-- Header with title/action -->
    <div
      v-if="$slots.title || $slots.action || foldable"
      class="dark:bg-dark-header flex justify-between border-b border-gray-200 bg-white px-4 py-2 dark:border-gray-700 sm:rounded-tl-lg sm:rounded-tr-lg"
    >
      <h3 class="text-base font-semibold leading-7 text-gray-800 dark:text-gray-400 sm:truncate sm:text-lg">
        <slot name="title" />
      </h3>
      <div class="flex items-center space-x-2">
        <slot name="action" />
        <button v-if="foldable" @click="contentVisible = !contentVisible" class="text-gray-400 hover:text-gray-500">
          <i :class="contentVisible ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </button>
      </div>
    </div>

    <!-- Content -->
    <Transition name="slide">
      <div v-show="contentVisible">
        <BaseLoader :is-loading="isLoading">
          <div
            class="dark:bg-dark-header bg-white"
            :class="contentClasses"
          >
            <slot />
          </div>
        </BaseLoader>
      </div>
    </Transition>

    <!-- Footer -->
    <div v-if="$slots.footer" class="dark:bg-dark-header bg-white px-4 py-3 text-right sm:rounded-bl-lg sm:rounded-br-lg sm:px-6">
      <slot name="footer" />
    </div>

    <!-- Progress -->
    <div v-if="$slots.progress" class="dark:bg-dark-header bg-white text-right sm:rounded-bl-lg sm:rounded-br-lg">
      <slot name="progress" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    noBorder: { type: Boolean, default: false },
    lessPadding: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
    noContentPadding: { type: Boolean, default: false },
    bottomContentPadding: { type: Boolean, default: false },
    topContentPadding: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    isContentVisible: { type: Boolean, default: true },
    foldable: { type: Boolean, default: false },
});

const contentVisible = ref(props.isContentVisible);

const contentClasses = computed(() => {
    if (props.noPadding) return '';
    if (props.noContentPadding) {
        let cls = '';
        if (props.bottomContentPadding) cls += ' pb-4';
        if (props.topContentPadding) cls += ' pt-4';
        return cls;
    }
    if (props.lessPadding) return 'px-4 py-2';
    return 'px-4 py-5 sm:p-6';
});
</script>
