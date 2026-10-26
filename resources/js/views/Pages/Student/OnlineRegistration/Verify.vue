<template>
  <div>
    <PageHeader :title="$trans('student.online_registration.verify')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Verify</template>
        <div class="p-4">
          <!-- Verify page - reconstruct from beautified source: Student/OnlineRegistration/Verify -->
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
