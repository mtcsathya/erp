<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('academic.timetable.timetable')"
        :navs="[{ label: $trans('academic.academic'), path: 'Academic' }]"
      >
        <PageHeaderAction
          url="academic/timetable/" name="AcademicTimetable"
          :title="$trans('academic.timetable.timetable')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="academic.timetable">
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
const initUrl = 'academic/timetable/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
