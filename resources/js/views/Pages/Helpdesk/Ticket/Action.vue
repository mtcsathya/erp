<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('helpdesk.helpdesk'), path: 'Helpdesk' },
      { label: $trans('helpdesk.ticket.ticket'), path: 'HelpdeskTicketList' },
    ]"
  >
    <PageHeaderAction name="HelpdeskTicket" :title="$trans('helpdesk.ticket.ticket')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HelpdeskTicketForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HelpdeskTicketForm from './Form.vue';
const route = useRoute();
</script>
