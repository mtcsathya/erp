<template>
  <div>
    <PageHeader :title="$trans('user.profile.account')" :navs="[{ label: $trans('user.user'), path: 'User' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Account</template>
        <div class="p-4">
          <!-- Account page - reconstruct from beautified source: User/Profile/Account -->
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
