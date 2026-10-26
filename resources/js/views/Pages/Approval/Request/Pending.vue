<template>
  <div>
    <PageHeader :title="$trans('approval.request.pending')" :navs="[{ label: $trans('approval.approval'), path: 'Approval' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Pending</template>
        <div class="p-4">
          <!-- Pending page - reconstruct from beautified source: Approval/Request/Pending -->
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
