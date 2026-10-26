<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.correspondence.correspondence'), path: 'ReceptionCorrespondenceList' },
    ]"
  >
    <PageHeaderAction name="ReceptionCorrespondence" :title="$trans('reception.correspondence.correspondence')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ReceptionCorrespondenceForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ReceptionCorrespondenceForm from './Form.vue';
const route = useRoute();
</script>
