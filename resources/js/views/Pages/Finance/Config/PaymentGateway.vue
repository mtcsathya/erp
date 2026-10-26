<template>
  <div>
    <PageHeader :title="$trans('finance.config.payment_gateway')" :navs="[{ label: $trans('finance.finance'), path: 'Finance' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>PaymentGateway</template>
        <div class="p-4">
          <!-- PaymentGateway page - reconstruct from beautified source: Finance/Config/PaymentGateway -->
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
