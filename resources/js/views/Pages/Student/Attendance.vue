<template>
  <div>
    <PageHeader :title="$trans('student.attendance')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Attendance</template>
        <div class="p-4">
          <!-- Attendance page - reconstruct from beautified source: Student/Attendance -->
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
