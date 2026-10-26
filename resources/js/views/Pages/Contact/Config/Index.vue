<template>
  <PageHeader
    :title="$trans('contact.config.config')"
    :navs="[{ label: $trans('contact.contact'), path: 'Contact' }]"
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
    { name: 'ContactConfigGeneral', label: 'General' },
];
</script>
