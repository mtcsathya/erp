<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.id_card_template.id_card_template'), path: 'AcademicIdCardTemplateList' },
    ]"
  >
    <PageHeaderAction name="AcademicIdCardTemplate" :title="$trans('academic.id_card_template.id_card_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicIdCardTemplateForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicIdCardTemplateForm from './Form.vue';
const route = useRoute();
</script>
