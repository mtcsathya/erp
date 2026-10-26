<template>
  <div>
    <PageHeader :title="$trans('auth.email_request')" :navs="[{ label: $trans('auth.auth'), path: 'Auth' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>EmailRequest</template>
        <div class="p-4">
          <!-- EmailRequest page - reconstruct from beautified source: Auth/EmailRequest -->
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
