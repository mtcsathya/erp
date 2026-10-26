<template>
  <div>
    <PageHeader :title="$trans('contact.config.document_type.show')" :navs="[{ label: $trans('contact.contact'), path: 'Contact' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Show</template>
        <div class="p-4">
          <!-- Show page - reconstruct from beautified source: Contact/Config/DocumentType/Show -->
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
