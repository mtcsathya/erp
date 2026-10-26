<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('exam.observation_mark.observation_mark')"
        :navs="[{ label: $trans('exam.exam'), path: 'Exam' }]"
      >
        <PageHeaderAction
          url="exam/observationMark/" name="ExamObservationMark"
          :title="$trans('exam.observation_mark.observation_mark')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="exam.observation_mark">
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
const initUrl = 'exam/observationMark/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
