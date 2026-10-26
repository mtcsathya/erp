<template>
  <div>
    <PageHeader :title="$trans('reception.enquiry.wizard')" :navs="[{ label: $trans('reception.reception'), path: 'Reception' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Wizard</template>
        <div class="p-4">
          <!-- Wizard page - reconstruct from beautified source: Reception/Enquiry/Wizard -->
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
