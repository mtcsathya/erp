<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('option.option'), path: 'Option' },
      { label: $trans('option.option'), path: 'OptionList' },
    ]"
  >
    <PageHeaderAction name="Option" :title="$trans('option.option')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <OptionForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import OptionForm from './Form.vue';
const route = useRoute();
</script>
