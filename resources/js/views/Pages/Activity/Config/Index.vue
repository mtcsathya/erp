<template>
  <PageHeader
    :title="$trans('activity.config.config')"
    :navs="[{ label: $trans('activity.activity'), path: 'Activity' }]"
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
    { name: 'ActivityConfigGeneral', label: 'General' },
];
</script>
