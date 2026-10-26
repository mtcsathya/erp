<template>
  <PageHeader
    :title="$trans('discipline.config.config')"
    :navs="[{ label: $trans('discipline.discipline'), path: 'Discipline' }]"
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
    { name: 'DisciplineConfigGeneral', label: 'General' },
];
</script>
