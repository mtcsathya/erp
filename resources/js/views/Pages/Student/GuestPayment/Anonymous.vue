<template>
  <div>
    <PageHeader :title="$trans('student.guest_payment.anonymous')" :navs="[{ label: $trans('student.student'), path: 'Student' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>Anonymous</template>
        <div class="p-4">
          <!-- Anonymous page - reconstruct from beautified source: Student/GuestPayment/Anonymous -->
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
