<template>
  <div>
    <PageHeader :title="$trans('config.asset.index')" :navs="[{ label: $trans('config.config'), path: 'Config' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Index</template>
        <div class="p-4">
          <!-- Index page - reconstruct from beautified source: Config/Asset/Index -->
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
