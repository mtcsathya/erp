<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.call_log.call_log'), path: 'ReceptionCallLogList' },
    ]"
  >
    <PageHeaderAction name="ReceptionCallLog" :title="$trans('reception.call_log.call_log')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReceptionCallLogForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReceptionCallLogForm from './Form.vue';
const route = useRoute();
</script>
