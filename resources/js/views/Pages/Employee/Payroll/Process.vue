<template>
  <div>
    <PageHeader :title="$trans('employee.payroll.process')" :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Process</template>
        <div class="p-4">
          <!-- Process page - reconstruct from beautified source: Employee/Payroll/Process -->
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
