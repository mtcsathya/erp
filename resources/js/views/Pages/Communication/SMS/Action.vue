<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.s_m_s.s_m_s'), path: 'CommunicationSMSList' },
    ]"
  >
    <PageHeaderAction name="CommunicationSMS" :title="$trans('communication.s_m_s.s_m_s')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CommunicationSMSForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CommunicationSMSForm from './Form.vue';
const route = useRoute();
</script>
