<template>
  <div>
    <PageHeader :title="$trans('recruitment.job.application')" :navs="[{ label: $trans('recruitment.recruitment'), path: 'Recruitment' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Application</template>
        <div class="p-4">
          <!-- Application page - reconstruct from beautified source: Recruitment/Job/Application -->
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
