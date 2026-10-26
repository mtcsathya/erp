<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('calendar.holiday.holiday')"
        :navs="[{ label: $trans('calendar.calendar'), path: 'Calendar' }]"
      >
        <PageHeaderAction
          url="calendar/holiday/" name="CalendarHoliday"
          :title="$trans('calendar.holiday.holiday')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="calendar.holiday">
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
const initUrl = 'calendar/holiday/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
