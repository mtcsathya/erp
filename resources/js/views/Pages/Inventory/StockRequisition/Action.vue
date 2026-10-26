<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.stock_requisition.stock_requisition'), path: 'InventoryStockRequisitionList' },
    ]"
  >
    <PageHeaderAction name="InventoryStockRequisition" :title="$trans('inventory.stock_requisition.stock_requisition')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryStockRequisitionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryStockRequisitionForm from './Form.vue';
const route = useRoute();
</script>
