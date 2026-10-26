<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('library.book_wise_transaction.book_wise_transaction')"
        :navs="[{ label: $trans('library.library'), path: 'Library' }]"
      >
        <PageHeaderAction
          url="library/bookWiseTransaction/" name="LibraryBookWiseTransaction"
          :title="$trans('library.book_wise_transaction.book_wise_transaction')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="library.book_wise_transaction">
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
const initUrl = 'library/bookWiseTransaction/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
