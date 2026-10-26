<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_transfer.stock_transfer'), path: 'InventoryStockTransferList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockTransfer" :title="$trans('inventory.stock_transfer.stock_transfer')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockTransferForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockTransferForm from './Form.vue';
const route = useRoute();
</script>
