<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('recruitment.recruitment'), path: 'Recruitment' },
      { label: $trans('recruitment.vacancy.vacancy'), path: 'RecruitmentVacancyList' },
    ]"
  >
    <PageHeaderAction name="RecruitmentVacancy" :title="$trans('recruitment.vacancy.vacancy')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <RecruitmentVacancyForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import RecruitmentVacancyForm from './Form.vue';
const route = useRoute();
</script>
