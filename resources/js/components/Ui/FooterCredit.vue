<template>
  <footer class="py-4 text-center text-xs text-gray-400 dark:text-gray-500">
    <slot>
      &copy; {{ new Date().getFullYear() }} — Powered by InstiKit
    </slot>
  </footer>
</template>
