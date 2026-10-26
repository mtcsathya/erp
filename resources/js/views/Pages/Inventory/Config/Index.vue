<template>
  <PageHeader
    :title="$trans('inventory.config.config')"
    :navs="[{ label: $trans('inventory.inventory'), path: 'Inventory' }]"
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
    { name: 'InventoryConfigGeneral', label: 'General' },
];
</script>
