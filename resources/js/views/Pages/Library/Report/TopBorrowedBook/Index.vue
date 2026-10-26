<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('library.report.top_borrowed_book.top_borrowed_book')"
        :navs="[{ label: $trans('library.library'), path: 'Library' }]"
      >
        <PageHeaderAction
          url="library/report/topBorrowedBook/" name="LibraryReportTopBorrowedBook"
          :title="$trans('library.report.top_borrowed_book.top_borrowed_book')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="library.report.top_borrowed_book">
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
const initUrl = 'library/report/topBorrowedBook/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
