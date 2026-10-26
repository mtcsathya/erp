<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('mess.meal_log.meal_log')"
        :navs="[{ label: $trans('mess.mess'), path: 'Mess' }]"
      >
        <PageHeaderAction
          url="mess/mealLog/" name="MessMealLog"
          :title="$trans('mess.meal_log.meal_log')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="mess.meal_log">
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
const initUrl = 'mess/mealLog/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
