<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.block.block'), path: 'HostelBlockList' },
    ]"
  >
    <PageHeaderAction name="HostelBlock" :title="$trans('hostel.block.block')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HostelBlockForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HostelBlockForm from './Form.vue';
const route = useRoute();
</script>
