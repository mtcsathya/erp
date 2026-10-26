<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('utility.activity_log.activity_log')"
        :navs="[{ label: $trans('utility.utility'), path: 'Utility' }]"
      >
        <PageHeaderAction
          url="utility/activityLog/" name="UtilityActivityLog"
          :title="$trans('utility.activity_log.activity_log')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="utility.activity_log">
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
const initUrl = 'utility/activityLog/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
