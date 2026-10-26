<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('recruitment.recruitment'), path: 'Recruitment' },
      { label: $trans('recruitment.application.application'), path: 'RecruitmentApplicationList' },
    ]"
  >
    <PageHeaderAction name="RecruitmentApplication" :title="$trans('recruitment.application.application')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <RecruitmentApplicationForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import RecruitmentApplicationForm from './Form.vue';
const route = useRoute();
</script>
