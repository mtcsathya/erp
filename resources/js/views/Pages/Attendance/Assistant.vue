<template>
  <div>
    <PageHeader :title="$trans('attendance.assistant')" :navs="[{ label: $trans('attendance.attendance'), path: 'Attendance' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Assistant</template>
        <div class="p-4">
          <!-- Assistant page - reconstruct from beautified source: Attendance/Assistant -->
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
