<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.enquiry.enquiry'), path: 'ReceptionEnquiryList' },
    ]"
  >
    <PageHeaderAction name="ReceptionEnquiry" :title="$trans('reception.enquiry.enquiry')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReceptionEnquiryForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReceptionEnquiryForm from './Form.vue';
const route = useRoute();
</script>
