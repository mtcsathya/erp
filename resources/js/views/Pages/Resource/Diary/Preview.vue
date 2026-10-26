<template>
  <div>
    <PageHeader :title="$trans('resource.diary.preview')" :navs="[{ label: $trans('resource.resource'), path: 'Resource' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Preview</template>
        <div class="p-4">
          <!-- Preview page - reconstruct from beautified source: Resource/Diary/Preview -->
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
