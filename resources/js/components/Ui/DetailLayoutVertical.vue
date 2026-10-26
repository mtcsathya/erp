<template>
  <div class="mx-auto mt-8 grid max-w-full grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3">
    <div class="flex flex-col space-y-6 lg:col-span-2 lg:col-start-1">
      <section class="flex-1 space-y-4">
        <slot />
      </section>
    </div>
    <section class="flex flex-col space-y-4 lg:col-span-1 lg:col-start-3">
      <slot name="detail" />
    </section>
  </div>
</template>
