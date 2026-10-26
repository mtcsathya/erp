<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('task.dashboard.dashboard')"
        :navs="[{ label: $trans('task.task'), path: 'Task' }]"
      >
        <PageHeaderAction
          url="task/dashboard/" name="TaskDashboard"
          :title="$trans('task.dashboard.dashboard')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="task.dashboard">
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
const initUrl = 'task/dashboard/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
