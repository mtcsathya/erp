<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('custom_field.custom_field'), path: 'CustomField' },
      { label: $trans('custom_field.custom_field'), path: 'CustomFieldList' },
    ]"
  >
    <PageHeaderAction name="CustomField" :title="$trans('custom_field.custom_field')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CustomFieldForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CustomFieldForm from './Form.vue';
const route = useRoute();
</script>
