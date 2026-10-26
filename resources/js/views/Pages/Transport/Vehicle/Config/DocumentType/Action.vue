<template>
  <div>
    <PageHeader :title="$trans('transport.vehicle.config.document_type.action')" :navs="[{ label: $trans('transport.transport'), path: 'Transport' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Action</template>
        <div class="p-4">
          <!-- Action page - reconstruct from beautified source: Transport/Vehicle/Config/DocumentType/Action -->
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
