<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.visitor_log.visitor_log'), path: 'ReceptionVisitorLogList' },
    ]"
  >
    <PageHeaderAction name="ReceptionVisitorLog" :title="$trans('reception.visitor_log.visitor_log')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReceptionVisitorLogForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReceptionVisitorLogForm from './Form.vue';
const route = useRoute();
</script>
