<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('exam.report.mark_summary.mark_summary')"
        :navs="[{ label: $trans('exam.exam'), path: 'Exam' }]"
      >
        <PageHeaderAction
          url="exam/report/markSummary/" name="ExamReportMarkSummary"
          :title="$trans('exam.report.mark_summary.mark_summary')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="exam.report.mark_summary">
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
const initUrl = 'exam/report/markSummary/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
