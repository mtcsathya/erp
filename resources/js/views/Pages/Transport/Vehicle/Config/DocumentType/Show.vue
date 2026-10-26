<template>
  <div>
    <PageHeader :title="$trans('transport.vehicle.config.document_type.show')" :navs="[{ label: $trans('transport.transport'), path: 'Transport' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Show</template>
        <div class="p-4">
          <!-- Show page - reconstruct from beautified source: Transport/Vehicle/Config/DocumentType/Show -->
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
