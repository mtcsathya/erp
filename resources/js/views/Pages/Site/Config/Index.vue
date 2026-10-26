<template>
  <PageHeader
    :title="$trans('site.config.config')"
    :navs="[{ label: $trans('site.site'), path: 'Site' }]"
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
    { name: 'SiteConfigGeneral', label: 'General' },
];
</script>
