<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.incharge.incharge'), path: 'InventoryInchargeList' },
    ]"
  >
    <PageHeaderAction name="InventoryIncharge" :title="$trans('inventory.incharge.incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryInchargeForm from './Form.vue';
const route = useRoute();
</script>
