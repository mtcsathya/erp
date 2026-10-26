<template>
  <div>
    <PageHeader :title="$trans('inventory.vendor.statement')" :navs="[{ label: $trans('inventory.inventory'), path: 'Inventory' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Statement</template>
        <div class="p-4">
          <!-- Statement page - reconstruct from beautified source: Inventory/Vendor/Statement -->
        </div>
      </BaseCard>
    </ParentTransition>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
