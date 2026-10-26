<template>
  <PageHeader
    :title="$trans('employee.leave.config.config')"
    :navs="[{ label: $trans('employee.leave.employee'), path: 'Employee' }]"
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
    { name: 'EmployeeLeaveConfigGeneral', label: 'General' },
];
</script>
