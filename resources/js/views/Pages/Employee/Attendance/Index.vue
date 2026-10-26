<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('employee.attendance.attendance')"
        :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]"
      >
        <PageHeaderAction
          url="employee/attendance/" name="EmployeeAttendance"
          :title="$trans('employee.attendance.attendance')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="employee.attendance">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid">
              <DataCell name="name">{{ item.name || item.title || item.label }}</DataCell>
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>
</template>

<script setup>
import { reactive } from 'vue';
const initUrl = 'employee/attendance/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
