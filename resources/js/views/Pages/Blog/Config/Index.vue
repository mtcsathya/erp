<template>
  <PageHeader
    :title="$trans('blog.config.config')"
    :navs="[{ label: $trans('blog.blog'), path: 'Blog' }]"
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
    { name: 'BlogConfigGeneral', label: 'General' },
];
</script>
