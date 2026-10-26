<template>
  <div>
    <PageHeader :title="$trans('config.chat.index')" :navs="[{ label: $trans('config.config'), path: 'Config' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Index</template>
        <div class="p-4">
          <!-- Index page - reconstruct from beautified source: Config/Chat/Index -->
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
