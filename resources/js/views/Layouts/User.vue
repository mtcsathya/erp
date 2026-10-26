<template>
  <div>
    <PageHeader :title="$trans('layouts.user')" :navs="[{ label: $trans('layouts.layouts'), path: 'Layouts' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>User</template>
        <div class="p-4">
          <!-- User page - reconstruct from beautified source: Layouts/User -->
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
