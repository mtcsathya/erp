<template>
  <PageHeader
    :title="$trans('gallery.config.config')"
    :navs="[{ label: $trans('gallery.gallery'), path: 'Gallery' }]"
  />

  <ParentTransition appear :visibility="true">
    <ConfigPage>
      <template #sidebar>
        <ConfigSidebar :items="sidebarItems" />
      </template>
      <router-view />
    </ConfigPage>
  </ParentTransition>
</template>

<script setup>
const sidebarItems = [
    { name: 'GalleryConfigGeneral', label: 'General' },
];
</script>
