<template>
  <PageHeader
    :title="$trans('transport.vehicle.config.config')"
    :navs="[{ label: $trans('transport.vehicle.transport'), path: 'Transport' }]"
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
    { name: 'TransportVehicleConfigGeneral', label: 'General' },
];
</script>
