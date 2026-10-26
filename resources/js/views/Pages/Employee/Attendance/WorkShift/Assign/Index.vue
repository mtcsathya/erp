<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('employee.attendance.work_shift.assign.assign')"
        :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]"
      >
        <PageHeaderAction
          url="employee/attendance/workShift/assign/" name="EmployeeAttendanceWorkShiftAssign"
          :title="$trans('employee.attendance.work_shift.assign.assign')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="employee.attendance.work_shift.assign">
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
const initUrl = 'employee/attendance/workShift/assign/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
