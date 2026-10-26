<template>
  <PageHeader
    :title="$trans('reception.config.config')"
    :navs="[{ label: $trans('reception.reception'), path: 'Reception' }]"
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
    { name: 'ReceptionConfigGeneral', label: 'General' },
];
</script>
