<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('config.config'), path: 'Config' },
      { label: $trans('config.s_m_s_template.s_m_s_template'), path: 'ConfigSMSTemplateList' },
    ]"
  >
    <PageHeaderAction name="ConfigSMSTemplate" :title="$trans('config.s_m_s_template.s_m_s_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ConfigSMSTemplateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ConfigSMSTemplateForm from './Form.vue';
const route = useRoute();
</script>
