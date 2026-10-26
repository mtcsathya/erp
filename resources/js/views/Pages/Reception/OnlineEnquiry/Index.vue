<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('reception.online_enquiry.online_enquiry')"
        :navs="[{ label: $trans('reception.reception'), path: 'Reception' }]"
      >
        <PageHeaderAction
          url="reception/onlineEnquiry/" name="ReceptionOnlineEnquiry"
          :title="$trans('reception.online_enquiry.online_enquiry')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="reception.online_enquiry">
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
const initUrl = 'reception/onlineEnquiry/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
