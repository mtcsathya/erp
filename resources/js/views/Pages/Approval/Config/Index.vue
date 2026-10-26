<template>
  <PageHeader
    :title="$trans('approval.config.config')"
    :navs="[{ label: $trans('approval.approval'), path: 'Approval' }]"
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
    { name: 'ApprovalConfigGeneral', label: 'General' },
];
</script>
