<template>
  <PageHeader
    :title="$trans('task.config.config')"
    :navs="[{ label: $trans('task.task'), path: 'Task' }]"
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
    { name: 'TaskConfigGeneral', label: 'General' },
];
</script>
