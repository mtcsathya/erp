<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.circle.circle'), path: 'TransportCircleList' },
    ]"
  >
    <PageHeaderAction name="TransportCircle" :title="$trans('transport.circle.circle')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TransportCircleForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TransportCircleForm from './Form.vue';
const route = useRoute();
</script>
