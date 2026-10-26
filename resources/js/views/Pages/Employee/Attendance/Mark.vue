<template>
  <div>
    <PageHeader :title="$trans('employee.attendance.mark')" :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Mark</template>
        <div class="p-4">
          <!-- Mark page - reconstruct from beautified source: Employee/Attendance/Mark -->
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
