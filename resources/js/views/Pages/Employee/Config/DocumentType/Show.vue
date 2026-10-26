<template>
  <div>
    <PageHeader :title="$trans('employee.config.document_type.show')" :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Show</template>
        <div class="p-4">
          <!-- Show page - reconstruct from beautified source: Employee/Config/DocumentType/Show -->
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
