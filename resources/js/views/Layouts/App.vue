<template>
  <NotificationBar type="app" />

  <div class="dark:bg-dark-body relative flex h-screen overflow-hidden bg-gray-200">
    <!-- Sidebar -->
    <AppSidebar />

    <!-- Main content area -->
    <div
      class="flex w-0 flex-1 flex-col overflow-hidden"
      :class="{ 'lg:ml-16': !isPinned }"
    >
      <!-- Header -->
      <AppHeader />

      <!-- Main content -->
      <main
        ref="scrollSection"
        class="scroller-thin-y relative z-0 flex-1 focus:outline-none"
        :class="{
          'overflow-y-auto': $route.query.view !== 'board',
          'overflow-y-hidden': $route.query.view === 'board',
        }"
        @scroll="onScroll"
      >
        <div class="space-y-4" :class="{ 'py-4 lg:px-4': hasPadding }">
          <router-view />
        </div>

        <FooterCredit />

        <!-- Scroll buttons -->
        <div v-if="showScrollButtons && isScrollable" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          <button @click="scrollToTop" class="bg-primary dark:bg-gray-500 bg-opacity-50 text-white text-sm px-3 py-1 rounded-full hover:bg-dark-primary shadow">
            &uarr;
          </button>
          <button @click="scrollToBottom" class="bg-primary dark:bg-gray-500 bg-opacity-50 text-white text-sm px-3 py-1 rounded-full hover:bg-dark-primary shadow">
            &darr;
          </button>
        </div>
      </main>
    </div>

    <!-- Setup Wizard sidebar (admin only) -->
    <div v-if="!screenSize.small && showSetupWizard && isAdmin" class="h-screen flex-none w-1/3 bg-white dark:bg-dark-header">
      <div class="scroller-thin-y h-screen overflow-x-hidden">
        <SetupWizard />
      </div>
    </div>
  </div>

  <ReLogin />
  <KeySearch ref="keySearchRef" />
  <UserScope />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick, provide } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const scrollSection = ref(null);
const keySearchRef = ref(null);
const isScrollable = ref(false);

provide('keySearch', {
    openSearch: () => keySearchRef.value?.openSearch(),
    closeSearch: () => keySearchRef.value?.closeSearch(),
});

const cfg = (key) => store.getters['config/config']?.(key);
const showScrollButtons = cfg('system.showScrollButtons');
const showSetupWizard = cfg('system.showSetupWizard');

const isPinned = computed(() => store.getters['layout/getSidebarType'] === 'pinned');
const hasPadding = computed(() => !route.meta.noPadding);
const isAdmin = computed(() => store.getters['auth/roles']?.includes('admin'));
const screenSize = computed(() => ({ small: window.innerWidth < 1024 }));

function checkScrollable() {
    const el = scrollSection.value;
    if (el) {
        isScrollable.value = el.scrollHeight > el.clientHeight;
    }
}

function onScroll() {
    // scroll tracking if needed
}

function scrollToTop() {
    scrollSection.value?.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    const el = scrollSection.value;
    el?.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
}

onMounted(() => {
    nextTick(() => setTimeout(checkScrollable, 300));
    window.addEventListener('resize', checkScrollable);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScrollable);
});

watch(() => route.fullPath, () => {
    nextTick(() => setTimeout(checkScrollable, 300));
});
</script>
