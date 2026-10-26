<template>
  <div>
    <PageHeader :title="$trans('chat.message')" :navs="[{ label: $trans('chat.chat'), path: 'Chat' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Message</template>
        <div class="p-4">
          <!-- Message page - reconstruct from beautified source: Chat/Message -->
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
