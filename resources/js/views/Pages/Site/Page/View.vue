<template>
  <div>
    <PageHeader :title="$trans('site.page.view')" :navs="[{ label: $trans('site.site'), path: 'Site' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>View</template>
        <div class="p-4">
          <!-- View page - reconstruct from beautified source: Site/Page/View -->
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
