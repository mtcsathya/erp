<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_return.stock_return'), path: 'InventoryStockReturnList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockReturn" :title="$trans('inventory.stock_return.stock_return')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockReturnForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockReturnForm from './Form.vue';
const route = useRoute();
</script>
