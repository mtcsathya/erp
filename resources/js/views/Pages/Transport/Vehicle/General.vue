<template>
  <div>
    <PageHeader :title="$trans('transport.vehicle.general')" :navs="[{ label: $trans('transport.transport'), path: 'Transport' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>General</template>
        <div class="p-4">
          <!-- General page - reconstruct from beautified source: Transport/Vehicle/General -->
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
