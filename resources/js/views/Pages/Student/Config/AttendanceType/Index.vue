<template>
  <PageHeader
    :title="$trans('student.config.config')"
    :navs="[{ label: $trans('student.student'), path: 'Student' }]"
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
    { name: 'StudentConfigGeneral', label: 'General' },
];
</script>
