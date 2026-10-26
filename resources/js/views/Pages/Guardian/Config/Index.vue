<template>
  <PageHeader
    :title="$trans('guardian.config.config')"
    :navs="[{ label: $trans('guardian.guardian'), path: 'Guardian' }]"
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
    { name: 'GuardianConfigGeneral', label: 'General' },
];
</script>
