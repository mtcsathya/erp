<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.stoppage.stoppage'), path: 'TransportStoppageList' },
    ]"
  >
    <PageHeaderAction name="TransportStoppage" :title="$trans('transport.stoppage.stoppage')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportStoppageForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportStoppageForm from './Form.vue';
const route = useRoute();
</script>
