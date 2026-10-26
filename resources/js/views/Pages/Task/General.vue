<template>
  <div>
    <PageHeader :title="$trans('task.general')" :navs="[{ label: $trans('task.task'), path: 'Task' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>General</template>
        <div class="p-4">
          <!-- General page - reconstruct from beautified source: Task/General -->
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
