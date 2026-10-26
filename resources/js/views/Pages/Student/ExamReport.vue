<template>
  <div>
    <PageHeader :title="$trans('student.exam_report')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>ExamReport</template>
        <div class="p-4">
          <!-- ExamReport page - reconstruct from beautified source: Student/ExamReport -->
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
