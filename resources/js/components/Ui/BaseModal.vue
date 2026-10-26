<template>
  <Teleport to="body">
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-screen items-center justify-center p-4">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-gray-500/75 dark:bg-gray-900/75" @click="$emit('close')"></div>

          <!-- Modal panel -->
          <div class="relative w-full max-w-lg transform rounded-lg bg-white dark:bg-dark-header shadow-xl transition-all">
            <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-3">
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                <slot name="title" />
              </h3>
              <button @click="$emit('close')" class="text-gray-400 hover:text-gray-500">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="p-4">
              <slot />
            </div>
            <div v-if="$slots.footer" class="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
    show: { type: Boolean, default: false },
});
defineEmits(['close']);
</script>
