<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('inventory.stock_purchase.stock_purchase')"
        :navs="[{ label: $trans('inventory.inventory'), path: 'Inventory' }]"
      >
        <PageHeaderAction
          url="inventory/stockPurchase/" name="InventoryStockPurchase"
          :title="$trans('inventory.stock_purchase.stock_purchase')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="inventory.stock_purchase">
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
const initUrl = 'inventory/stockPurchase/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
