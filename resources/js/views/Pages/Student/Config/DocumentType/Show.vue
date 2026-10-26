<template>
  <div>
    <PageHeader :title="$trans('student.config.document_type.show')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Show</template>
        <div class="p-4">
          <!-- Show page - reconstruct from beautified source: Student/Config/DocumentType/Show -->
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
