<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('config.config'), path: 'Config' },
      { label: $trans('config.push_notification_template.push_notification_template'), path: 'ConfigPushNotificationTemplateList' },
    ]"
  >
    <PageHeaderAction name="ConfigPushNotificationTemplate" :title="$trans('config.push_notification_template.push_notification_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ConfigPushNotificationTemplateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ConfigPushNotificationTemplateForm from './Form.vue';
const route = useRoute();
</script>
