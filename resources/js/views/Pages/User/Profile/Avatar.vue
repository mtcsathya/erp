<template>
  <div>
    <PageHeader :title="$trans('user.profile.avatar')" :navs="[{ label: $trans('user.user'), path: 'User' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Avatar</template>
        <div class="p-4">
          <!-- Avatar page - reconstruct from beautified source: User/Profile/Avatar -->
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
