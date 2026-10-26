<template>
  <div>
    <PageHeader :title="$trans('activity.trip.general')" :navs="[{ label: $trans('activity.activity'), path: 'Activity' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>General</template>
        <div class="p-4">
          <!-- General page - reconstruct from beautified source: Activity/Trip/General -->
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
