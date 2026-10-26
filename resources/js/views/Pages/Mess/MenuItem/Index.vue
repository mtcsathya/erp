<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('mess.menu_item.menu_item')"
        :navs="[{ label: $trans('mess.mess'), path: 'Mess' }]"
      >
        <PageHeaderAction
          url="mess/menuItem/" name="MessMenuItem"
          :title="$trans('mess.menu_item.menu_item')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="mess.menu_item">
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
const initUrl = 'mess/menuItem/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
