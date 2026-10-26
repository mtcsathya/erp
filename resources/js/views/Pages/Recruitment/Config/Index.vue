<template>
  <PageHeader
    :title="$trans('recruitment.config.config')"
    :navs="[{ label: $trans('recruitment.recruitment'), path: 'Recruitment' }]"
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
    { name: 'RecruitmentConfigGeneral', label: 'General' },
];
</script>
