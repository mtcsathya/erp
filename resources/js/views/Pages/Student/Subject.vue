<template>
  <div>
    <PageHeader :title="$trans('student.subject')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Subject</template>
        <div class="p-4">
          <!-- Subject page - reconstruct from beautified source: Student/Subject -->
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
