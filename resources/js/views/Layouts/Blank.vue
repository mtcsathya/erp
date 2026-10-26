<template>
  <div
    class="dark:bg-dark-body relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
    :style="backgroundStyle"
  >
    <div
      v-if="!isDark"
      :class="{
        'bg-grid-background absolute inset-0 bg-top bg-slate-400': pageLayout === 'linear_background',
        'bg-site-background absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]': pageLayout === 'dotted_gradient_background',
      }"
    ></div>

    <div
      class="dark:bg-dark-header container relative px-6 pb-8 pt-10 ring-1 ring-gray-900/5 dark:ring-gray-400/5 sm:mx-auto sm:rounded-lg sm:px-10"
      :class="{ 'bg-white shadow-xl': !$route.meta?.hideCard }"
    >
      <div class="mx-auto max-w-full">
        <img v-if="$route.meta?.showLogo" :src="logo" class="mb-4 h-20" alt="" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const cfg = (key) => store.getters['config/config']?.(key);
const isDark = computed(() => cfg('layout.display')?.value === 'dark');
const logo = isDark.value ? cfg('assets.logoLight') : cfg('assets.logo');
const pageLayout = computed(() => cfg('system.defaultGuestPageLayout')?.value);
const bgImage = computed(() => cfg('assets.guestFullPageBackground')?.value);

const backgroundStyle = computed(() => {
    if (pageLayout.value === 'image_background') {
        return {
            backgroundImage: `url(${bgImage.value})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
    }
    return {};
});
</script>
