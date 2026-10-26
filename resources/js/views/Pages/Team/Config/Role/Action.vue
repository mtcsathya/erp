<template>
  <div>
    <PageHeader :title="$trans('team.config.role.action')" :navs="[{ label: $trans('team.team'), path: 'Team' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Action</template>
        <div class="p-4">
          <!-- Action page - reconstruct from beautified source: Team/Config/Role/Action -->
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
