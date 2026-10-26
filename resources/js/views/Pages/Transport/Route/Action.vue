<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.route.route'), path: 'TransportRouteList' },
    ]"
  >
    <PageHeaderAction name="TransportRoute" :title="$trans('transport.route.route')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportRouteForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportRouteForm from './Form.vue';
const route = useRoute();
</script>
