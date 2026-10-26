<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('helpdesk.helpdesk'), path: 'Helpdesk' },
      { label: $trans('helpdesk.faq.faq'), path: 'HelpdeskFaqList' },
    ]"
  >
    <PageHeaderAction name="HelpdeskFaq" :title="$trans('helpdesk.faq.faq')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HelpdeskFaqForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HelpdeskFaqForm from './Form.vue';
const route = useRoute();
</script>
