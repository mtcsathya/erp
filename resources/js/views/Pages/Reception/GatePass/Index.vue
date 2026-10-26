<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('reception.gate_pass.gate_pass')"
        :navs="[{ label: $trans('reception.reception'), path: 'Reception' }]"
      >
        <PageHeaderAction
          url="reception/gatePass/" name="ReceptionGatePass"
          :title="$trans('reception.gate_pass.gate_pass')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="reception.gate_pass">
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
const initUrl = 'reception/gatePass/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
