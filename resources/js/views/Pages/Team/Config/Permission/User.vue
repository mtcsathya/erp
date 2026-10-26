<template>
  <div>
    <PageHeader :title="$trans('team.config.permission.user')" :navs="[{ label: $trans('team.team'), path: 'Team' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>User</template>
        <div class="p-4">
          <!-- User page - reconstruct from beautified source: Team/Config/Permission/User -->
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
