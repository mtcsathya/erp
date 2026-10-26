<template>
  <PageHeader
    :title="$trans('exam.config.config')"
    :navs="[{ label: $trans('exam.exam'), path: 'Exam' }]"
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
    { name: 'ExamConfigGeneral', label: 'General' },
];
</script>
