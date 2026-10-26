<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('approval.approval'), path: 'Approval' },
      { label: $trans('approval.request.request'), path: 'ApprovalRequestList' },
    ]"
  >
    <PageHeaderAction name="ApprovalRequest" :title="$trans('approval.request.request')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ApprovalRequestForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ApprovalRequestForm from './Form.vue';
const route = useRoute();
</script>
