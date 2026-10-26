<template>
  <div>
    <PageHeader :title="$trans('auth.email_verification')" :navs="[{ label: $trans('auth.auth'), path: 'Auth' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>EmailVerification</template>
        <div class="p-4">
          <!-- EmailVerification page - reconstruct from beautified source: Auth/EmailVerification -->
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
