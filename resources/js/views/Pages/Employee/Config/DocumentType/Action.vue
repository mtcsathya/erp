<template>
  <div>
    <PageHeader :title="$trans('employee.config.document_type.action')" :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Action</template>
        <div class="p-4">
          <!-- Action page - reconstruct from beautified source: Employee/Config/DocumentType/Action -->
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
