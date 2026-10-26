<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.vendor.vendor'), path: 'InventoryVendorList' },
    ]"
  >
    <PageHeaderAction name="InventoryVendor" :title="$trans('inventory.vendor.vendor')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <InventoryVendorForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import InventoryVendorForm from './Form.vue';
const route = useRoute();
</script>
