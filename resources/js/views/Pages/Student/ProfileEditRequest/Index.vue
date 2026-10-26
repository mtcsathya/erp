<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('student.profile_edit_request.profile_edit_request')"
        :navs="[{ label: $trans('student.student'), path: 'Student' }]"
      >
        <PageHeaderAction
          url="student/profileEditRequest/" name="StudentProfileEditRequest"
          :title="$trans('student.profile_edit_request.profile_edit_request')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="student.profile_edit_request">
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
const initUrl = 'student/profileEditRequest/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
