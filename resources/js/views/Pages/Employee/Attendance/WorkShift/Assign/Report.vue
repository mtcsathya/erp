<template>
  <div>
    <PageHeader :title="$trans('employee.attendance.work_shift.assign.report')" :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Report</template>
        <div class="p-4">
          <!-- Report page - reconstruct from beautified source: Employee/Attendance/WorkShift/Assign/Report -->
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
