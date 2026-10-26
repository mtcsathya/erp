<template>
  <div>
    <PageHeader :title="$trans('config.locale.action')" :navs="[{ label: $trans('config.config'), path: 'Config' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Action</template>
        <div class="p-4">
          <!-- Action page - reconstruct from beautified source: Config/Locale/Action -->
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
