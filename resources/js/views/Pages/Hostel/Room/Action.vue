<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.room.room'), path: 'HostelRoomList' },
    ]"
  >
    <PageHeaderAction name="HostelRoom" :title="$trans('hostel.room.room')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <HostelRoomForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HostelRoomForm from './Form.vue';
const route = useRoute();
</script>
