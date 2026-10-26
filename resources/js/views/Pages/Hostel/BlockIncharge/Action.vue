<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.block_incharge.block_incharge'), path: 'HostelBlockInchargeList' },
    ]"
  >
    <PageHeaderAction name="HostelBlockIncharge" :title="$trans('hostel.block_incharge.block_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HostelBlockInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HostelBlockInchargeForm from './Form.vue';
const route = useRoute();
</script>
