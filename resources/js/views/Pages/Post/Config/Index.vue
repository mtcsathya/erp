<template>
  <PageHeader
    :title="$trans('post.config.config')"
    :navs="[{ label: $trans('post.post'), path: 'Post' }]"
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
    { name: 'PostConfigGeneral', label: 'General' },
];
</script>
