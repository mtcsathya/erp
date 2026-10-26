<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.diary.diary'), path: 'ResourceDiaryList' },
    ]"
  >
    <PageHeaderAction name="ResourceDiary" :title="$trans('resource.diary.diary')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ResourceDiaryForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ResourceDiaryForm from './Form.vue';
const route = useRoute();
</script>
