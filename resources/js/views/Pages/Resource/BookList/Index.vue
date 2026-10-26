<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('resource.book_list.book_list')"
        :navs="[{ label: $trans('resource.resource'), path: 'Resource' }]"
      >
        <PageHeaderAction
          url="resource/bookList/" name="ResourceBookList"
          :title="$trans('resource.book_list.book_list')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="resource.book_list">
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
const initUrl = 'resource/bookList/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
