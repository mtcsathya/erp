<template>
  <PageHeader
    :title="$trans('calendar.config.config')"
    :navs="[{ label: $trans('calendar.calendar'), path: 'Calendar' }]"
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
    { name: 'CalendarConfigGeneral', label: 'General' },
];
</script>
