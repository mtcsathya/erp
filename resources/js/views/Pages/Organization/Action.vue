<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('organization.organization'), path: 'Organization' },
      { label: $trans('organization.organization'), path: 'OrganizationList' },
    ]"
  >
    <PageHeaderAction name="Organization" :title="$trans('organization.organization')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <OrganizationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import OrganizationForm from './Form.vue';
const route = useRoute();
</script>
