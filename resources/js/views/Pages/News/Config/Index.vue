<template>
  <PageHeader
    :title="$trans('news.config.config')"
    :navs="[{ label: $trans('news.news'), path: 'News' }]"
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
    { name: 'NewsConfigGeneral', label: 'General' },
];
</script>
