<template>
  <div class="flex flex-col lg:flex-row gap-6">
    <div class="lg:w-64 flex-shrink-0">
      <slot name="sidebar" />
    </div>
    <div class="flex-1 min-w-0">
      <slot />
    </div>
  </div>
</template>
