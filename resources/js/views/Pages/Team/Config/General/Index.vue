<template>
  <PageHeader
    :title="$trans('team.config.config')"
    :navs="[{ label: $trans('team.team'), path: 'Team' }]"
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
    { name: 'TeamConfigGeneral', label: 'General' },
];
</script>
