<template>
  <PageHeader
    :title="$trans('academic.config.config')"
    :navs="[{ label: $trans('academic.academic'), path: 'Academic' }]"
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
    { name: 'AcademicConfigGeneral', label: 'General' },
];
</script>
