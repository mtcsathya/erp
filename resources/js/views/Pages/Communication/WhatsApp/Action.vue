<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.whats_app.whats_app'), path: 'CommunicationWhatsAppList' },
    ]"
  >
    <PageHeaderAction name="CommunicationWhatsApp" :title="$trans('communication.whats_app.whats_app')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CommunicationWhatsAppForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CommunicationWhatsAppForm from './Form.vue';
const route = useRoute();
</script>
