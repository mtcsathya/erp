<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('approval.approval'), path: 'Approval' },
      { label: $trans('approval.type.type'), path: 'ApprovalTypeList' },
    ]"
  >
    <PageHeaderAction name="ApprovalType" :title="$trans('approval.type.type')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ApprovalTypeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ApprovalTypeForm from './Form.vue';
const route = useRoute();
</script>
