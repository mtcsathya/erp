<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.certificate_template.certificate_template'), path: 'AcademicCertificateTemplateList' },
    ]"
  >
    <PageHeaderAction name="AcademicCertificateTemplate" :title="$trans('academic.certificate_template.certificate_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicCertificateTemplateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicCertificateTemplateForm from './Form.vue';
const route = useRoute();
</script>
