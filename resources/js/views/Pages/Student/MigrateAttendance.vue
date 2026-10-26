<template>
  <div>
    <PageHeader :title="$trans('student.migrate_attendance')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>MigrateAttendance</template>
        <div class="p-4">
          <!-- MigrateAttendance page - reconstruct from beautified source: Student/MigrateAttendance -->
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
