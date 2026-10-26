<template>
  <div>
    <PageHeader :title="$trans('product.license')" :navs="[{ label: $trans('product.product'), path: 'Product' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>License</template>
        <div class="p-4">
          <!-- License page - reconstruct from beautified source: Product/License -->
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
