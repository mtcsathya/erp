<template>
  <div>
    <PageHeader :title="$trans('student.registration.wizard')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Wizard</template>
        <div class="p-4">
          <!-- Wizard page - reconstruct from beautified source: Student/Registration/Wizard -->
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
