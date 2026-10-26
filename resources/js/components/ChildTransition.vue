<template>
  <Transition
    :appear="appear"
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="visibility">
      <slot />
    </div>
  </Transition>
</template>

<script setup>
defineProps({
    appear: { type: Boolean, default: false },
    visibility: { type: Boolean, default: true },
});
</script>
