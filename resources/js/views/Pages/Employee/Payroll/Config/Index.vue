<template>
  <PageHeader
    :title="$trans('employee.payroll.config.config')"
    :navs="[{ label: $trans('employee.payroll.employee'), path: 'Employee' }]"
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
    { name: 'EmployeePayrollConfigGeneral', label: 'General' },
];
</script>
