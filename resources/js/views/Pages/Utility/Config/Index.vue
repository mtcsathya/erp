<template>
  <PageHeader
    :title="$trans('utility.config.config')"
    :navs="[{ label: $trans('utility.utility'), path: 'Utility' }]"
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
    { name: 'UtilityConfigGeneral', label: 'General' },
];
</script>
