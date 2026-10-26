<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('inventory.stock_requisition.stock_requisition')"
        :navs="[{ label: $trans('inventory.inventory'), path: 'Inventory' }]"
      >
        <PageHeaderAction
          url="inventory/stockRequisition/" name="InventoryStockRequisition"
          :title="$trans('inventory.stock_requisition.stock_requisition')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="inventory.stock_requisition">
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
const initUrl = 'inventory/stockRequisition/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
