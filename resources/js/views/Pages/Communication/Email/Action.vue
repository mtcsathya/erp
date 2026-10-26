<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.email.email'), path: 'CommunicationEmailList' },
    ]"
  >
    <PageHeaderAction name="CommunicationEmail" :title="$trans('communication.email.email')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CommunicationEmailForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CommunicationEmailForm from './Form.vue';
const route = useRoute();
</script>
