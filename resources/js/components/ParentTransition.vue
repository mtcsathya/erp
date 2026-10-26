<template>
  <Transition
    :appear="appear"
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
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
