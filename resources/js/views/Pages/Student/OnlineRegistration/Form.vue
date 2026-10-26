<template>
  <div>
    <PageHeader :title="$trans('student.online_registration.form')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Form</template>
        <div class="p-4">
          <!-- Form page - reconstruct from beautified source: Student/OnlineRegistration/Form -->
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
