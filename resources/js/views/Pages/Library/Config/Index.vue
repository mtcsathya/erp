<template>
  <PageHeader
    :title="$trans('library.config.config')"
    :navs="[{ label: $trans('library.library'), path: 'Library' }]"
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
    { name: 'LibraryConfigGeneral', label: 'General' },
];
</script>
