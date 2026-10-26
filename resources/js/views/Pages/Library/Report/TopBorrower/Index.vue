<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('library.report.top_borrower.top_borrower')"
        :navs="[{ label: $trans('library.library'), path: 'Library' }]"
      >
        <PageHeaderAction
          url="library/report/topBorrower/" name="LibraryReportTopBorrower"
          :title="$trans('library.report.top_borrower.top_borrower')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="library.report.top_borrower">
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
const initUrl = 'library/report/topBorrower/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
