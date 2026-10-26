<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_adjustment.stock_adjustment'), path: 'InventoryStockAdjustmentList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockAdjustment" :title="$trans('inventory.stock_adjustment.stock_adjustment')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockAdjustmentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockAdjustmentForm from './Form.vue';
const route = useRoute();
</script>
