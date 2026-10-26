<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.session.session'), path: 'AcademicSessionList' },
    ]"
  >
    <PageHeaderAction name="AcademicSession" :title="$trans('academic.session.session')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicSessionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicSessionForm from './Form.vue';
const route = useRoute();
</script>
