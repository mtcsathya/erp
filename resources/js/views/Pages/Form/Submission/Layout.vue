<template>
  <div>
    <PageHeader :title="$trans('form.submission.layout')" :navs="[{ label: $trans('form.form'), path: 'Form' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Layout</template>
        <div class="p-4">
          <!-- Layout page - reconstruct from beautified source: Form/Submission/Layout -->
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
