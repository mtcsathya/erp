<template>
  <PageHeader
    :title="$trans('communication.config.config')"
    :navs="[{ label: $trans('communication.communication'), path: 'Communication' }]"
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
    { name: 'CommunicationConfigGeneral', label: 'General' },
];
</script>
