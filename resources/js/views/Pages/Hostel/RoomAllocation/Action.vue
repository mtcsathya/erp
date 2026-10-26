<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.room_allocation.room_allocation'), path: 'HostelRoomAllocationList' },
    ]"
  >
    <PageHeaderAction name="HostelRoomAllocation" :title="$trans('hostel.room_allocation.room_allocation')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HostelRoomAllocationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HostelRoomAllocationForm from './Form.vue';
const route = useRoute();
</script>
