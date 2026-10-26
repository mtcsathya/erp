<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.floor.floor'), path: 'HostelFloorList' },
    ]"
  >
    <PageHeaderAction name="HostelFloor" :title="$trans('hostel.floor.floor')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HostelFloorForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HostelFloorForm from './Form.vue';
const route = useRoute();
</script>
