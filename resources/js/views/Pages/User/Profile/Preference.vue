<template>
  <div>
    <PageHeader :title="$trans('user.profile.preference')" :navs="[{ label: $trans('user.user'), path: 'User' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Preference</template>
        <div class="p-4">
          <!-- Preference page - reconstruct from beautified source: User/Profile/Preference -->
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
