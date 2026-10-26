<template>
  <div>
    <PageHeader :title="$trans('academic.timetable.allocation')" :navs="[{ label: $trans('academic.academic'), path: 'Academic' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Allocation</template>
        <div class="p-4">
          <!-- Allocation page - reconstruct from beautified source: Academic/Timetable/Allocation -->
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
