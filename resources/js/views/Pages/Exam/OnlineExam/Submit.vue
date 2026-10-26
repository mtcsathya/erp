<template>
  <div>
    <PageHeader :title="$trans('exam.online_exam.submit')" :navs="[{ label: $trans('exam.exam'), path: 'Exam' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Submit</template>
        <div class="p-4">
          <!-- Submit page - reconstruct from beautified source: Exam/OnlineExam/Submit -->
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
