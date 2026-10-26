<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_item.stock_item'), path: 'InventoryStockItemList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockItem" :title="$trans('inventory.stock_item.stock_item')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockItemForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockItemForm from './Form.vue';
const route = useRoute();
</script>
