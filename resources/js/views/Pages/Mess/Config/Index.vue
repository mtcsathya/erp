<template>
  <PageHeader
    :title="$trans('mess.config.config')"
    :navs="[{ label: $trans('mess.mess'), path: 'Mess' }]"
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
    { name: 'MessConfigGeneral', label: 'General' },
];
</script>
