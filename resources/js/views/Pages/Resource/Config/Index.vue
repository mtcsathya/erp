<template>
  <PageHeader
    :title="$trans('resource.config.config')"
    :navs="[{ label: $trans('resource.resource'), path: 'Resource' }]"
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
    { name: 'ResourceConfigGeneral', label: 'General' },
];
</script>
