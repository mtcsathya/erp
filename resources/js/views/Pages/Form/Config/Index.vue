<template>
  <PageHeader
    :title="$trans('form.config.config')"
    :navs="[{ label: $trans('form.form'), path: 'Form' }]"
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
    { name: 'FormConfigGeneral', label: 'General' },
];
</script>
