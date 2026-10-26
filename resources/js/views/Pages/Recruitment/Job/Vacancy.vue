<template>
  <div>
    <PageHeader :title="$trans('recruitment.job.vacancy')" :navs="[{ label: $trans('recruitment.recruitment'), path: 'Recruitment' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Vacancy</template>
        <div class="p-4">
          <!-- Vacancy page - reconstruct from beautified source: Recruitment/Job/Vacancy -->
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
