<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('config.config'), path: 'Config' },
      { label: $trans('config.whats_app_template.whats_app_template'), path: 'ConfigWhatsAppTemplateList' },
    ]"
  >
    <PageHeaderAction name="ConfigWhatsAppTemplate" :title="$trans('config.whats_app_template.whats_app_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ConfigWhatsAppTemplateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ConfigWhatsAppTemplateForm from './Form.vue';
const route = useRoute();
</script>
