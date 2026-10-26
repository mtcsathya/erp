<template>
  <div>
    <PageHeader :title="$trans('recruitment.job.vacancy_detail')" :navs="[{ label: $trans('recruitment.recruitment'), path: 'Recruitment' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>VacancyDetail</template>
        <div class="p-4">
          <!-- VacancyDetail page - reconstruct from beautified source: Recruitment/Job/VacancyDetail -->
        </div>
      </BaseCard>
    </ParentTransition>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
