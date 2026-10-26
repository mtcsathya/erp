<template>
  <div>
    <PageHeader :title="$trans('student.attendance.absentee')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Absentee</template>
        <div class="p-4">
          <!-- Absentee page - reconstruct from beautified source: Student/Attendance/Absentee -->
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
