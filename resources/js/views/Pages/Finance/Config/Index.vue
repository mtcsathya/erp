<template>
  <PageHeader
    :title="$trans('finance.config.config')"
    :navs="[{ label: $trans('finance.finance'), path: 'Finance' }]"
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
    { name: 'FinanceConfigGeneral', label: 'General' },
];
</script>
