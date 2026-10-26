<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('exam.online_exam.question.question')"
        :navs="[{ label: $trans('exam.exam'), path: 'Exam' }]"
      >
        <PageHeaderAction
          url="exam/onlineExam/question/" name="ExamOnlineExamQuestion"
          :title="$trans('exam.online_exam.question.question')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="exam.online_exam.question">
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
const initUrl = 'exam/onlineExam/question/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
