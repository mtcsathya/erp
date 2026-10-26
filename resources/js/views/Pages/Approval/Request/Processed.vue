<template>
  <div>
    <PageHeader :title="$trans('approval.request.processed')" :navs="[{ label: $trans('approval.approval'), path: 'Approval' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Processed</template>
        <div class="p-4">
          <!-- Processed page - reconstruct from beautified source: Approval/Request/Processed -->
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
