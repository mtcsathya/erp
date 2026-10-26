<template>
  <div>
    <PageHeader :title="$trans('form.submit')" :navs="[{ label: $trans('form.form'), path: 'Form' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Submit</template>
        <div class="p-4">
          <!-- Submit page - reconstruct from beautified source: Form/Submit -->
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
