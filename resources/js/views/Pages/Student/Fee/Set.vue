<template>
  <div>
    <PageHeader :title="$trans('student.fee.set')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Set</template>
        <div class="p-4">
          <!-- Set page - reconstruct from beautified source: Student/Fee/Set -->
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
