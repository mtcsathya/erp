<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('resource.report.date_wise_student_diary.date_wise_student_diary')"
        :navs="[{ label: $trans('resource.resource'), path: 'Resource' }]"
      >
        <PageHeaderAction
          url="resource/report/dateWiseStudentDiary/" name="ResourceReportDateWiseStudentDiary"
          :title="$trans('resource.report.date_wise_student_diary.date_wise_student_diary')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="resource.report.date_wise_student_diary">
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
const initUrl = 'resource/report/dateWiseStudentDiary/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
