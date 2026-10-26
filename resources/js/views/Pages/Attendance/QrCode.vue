<template>
  <div>
    <PageHeader :title="$trans('attendance.qr_code')" :navs="[{ label: $trans('attendance.attendance'), path: 'Attendance' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>QrCode</template>
        <div class="p-4">
          <!-- QrCode page - reconstruct from beautified source: Attendance/QrCode -->
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
