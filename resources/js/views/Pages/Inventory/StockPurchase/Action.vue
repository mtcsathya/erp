<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_purchase.stock_purchase'), path: 'InventoryStockPurchaseList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockPurchase" :title="$trans('inventory.stock_purchase.stock_purchase')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockPurchaseForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockPurchaseForm from './Form.vue';
const route = useRoute();
</script>
