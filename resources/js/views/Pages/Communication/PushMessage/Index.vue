<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('communication.push_message.push_message')"
        :navs="[{ label: $trans('communication.communication'), path: 'Communication' }]"
      >
        <PageHeaderAction
          url="communication/pushMessage/" name="CommunicationPushMessage"
          :title="$trans('communication.push_message.push_message')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="communication.push_message">
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
const initUrl = 'communication/pushMessage/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
