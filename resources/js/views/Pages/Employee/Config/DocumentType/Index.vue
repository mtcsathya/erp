<template>
  <PageHeader
    :title="$trans('employee.config.config')"
    :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]"
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
    { name: 'EmployeeConfigGeneral', label: 'General' },
];
</script>
