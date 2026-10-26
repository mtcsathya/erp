<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.learning_material.learning_material'), path: 'ResourceLearningMaterialList' },
    ]"
  >
    <PageHeaderAction name="ResourceLearningMaterial" :title="$trans('resource.learning_material.learning_material')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ResourceLearningMaterialForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ResourceLearningMaterialForm from './Form.vue';
const route = useRoute();
</script>
