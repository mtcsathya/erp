<template>
  <PageHeader
    :title="$trans('transport.config.config')"
    :navs="[{ label: $trans('transport.transport'), path: 'Transport' }]"
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
    { name: 'TransportConfigGeneral', label: 'General' },
];
</script>
