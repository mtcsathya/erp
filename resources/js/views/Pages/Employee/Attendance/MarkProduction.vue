<template>
  <div>
    <PageHeader :title="$trans('employee.attendance.mark_production')" :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>MarkProduction</template>
        <div class="p-4">
          <!-- MarkProduction page - reconstruct from beautified source: Employee/Attendance/MarkProduction -->
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
