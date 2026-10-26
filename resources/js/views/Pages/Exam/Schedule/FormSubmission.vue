<template>
  <div>
    <PageHeader :title="$trans('exam.schedule.form_submission')" :navs="[{ label: $trans('exam.exam'), path: 'Exam' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>FormSubmission</template>
        <div class="p-4">
          <!-- FormSubmission page - reconstruct from beautified source: Exam/Schedule/FormSubmission -->
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
