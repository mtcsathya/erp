<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.online_class.online_class'), path: 'ResourceOnlineClassList' },
    ]"
  >
    <PageHeaderAction name="ResourceOnlineClass" :title="$trans('resource.online_class.online_class')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ResourceOnlineClassForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ResourceOnlineClassForm from './Form.vue';
const route = useRoute();
</script>
