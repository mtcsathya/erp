<template>
  <PageHeader
    :title="$trans('helpdesk.config.config')"
    :navs="[{ label: $trans('helpdesk.helpdesk'), path: 'Helpdesk' }]"
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
    { name: 'HelpdeskConfigGeneral', label: 'General' },
];
</script>
