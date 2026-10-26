<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.certificate.certificate'), path: 'AcademicCertificateList' },
    ]"
  >
    <PageHeaderAction name="AcademicCertificate" :title="$trans('academic.certificate.certificate')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicCertificateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicCertificateForm from './Form.vue';
const route = useRoute();
</script>
