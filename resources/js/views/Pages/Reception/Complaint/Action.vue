<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.complaint.complaint'), path: 'ReceptionComplaintList' },
    ]"
  >
    <PageHeaderAction name="ReceptionComplaint" :title="$trans('reception.complaint.complaint')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReceptionComplaintForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReceptionComplaintForm from './Form.vue';
const route = useRoute();
</script>
