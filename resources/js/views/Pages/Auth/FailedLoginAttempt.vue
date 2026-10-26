<template>
  <div>
    <PageHeader :title="$trans('auth.failed_login_attempt')" :navs="[{ label: $trans('auth.auth'), path: 'Auth' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>FailedLoginAttempt</template>
        <div class="p-4">
          <!-- FailedLoginAttempt page - reconstruct from beautified source: Auth/FailedLoginAttempt -->
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
