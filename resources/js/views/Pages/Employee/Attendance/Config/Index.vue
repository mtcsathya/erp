<template>
  <PageHeader
    :title="$trans('employee.attendance.config.config')"
    :navs="[{ label: $trans('employee.attendance.employee'), path: 'Employee' }]"
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
    { name: 'EmployeeAttendanceConfigGeneral', label: 'General' },
];
</script>
