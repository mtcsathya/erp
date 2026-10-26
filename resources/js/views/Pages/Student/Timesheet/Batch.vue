<template>
  <div>
    <PageHeader :title="$trans('student.timesheet.batch')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Batch</template>
        <div class="p-4">
          <!-- Batch page - reconstruct from beautified source: Student/Timesheet/Batch -->
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
