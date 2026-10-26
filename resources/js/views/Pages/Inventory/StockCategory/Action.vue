<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_category.stock_category'), path: 'InventoryStockCategoryList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockCategory" :title="$trans('inventory.stock_category.stock_category')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockCategoryForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockCategoryForm from './Form.vue';
const route = useRoute();
</script>
