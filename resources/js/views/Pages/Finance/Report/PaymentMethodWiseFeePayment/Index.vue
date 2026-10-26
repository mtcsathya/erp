<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('finance.report.payment_method_wise_fee_payment.payment_method_wise_fee_payment')"
        :navs="[{ label: $trans('finance.finance'), path: 'Finance' }]"
      >
        <PageHeaderAction
          url="finance/report/paymentMethodWiseFeePayment/" name="FinanceReportPaymentMethodWiseFeePayment"
          :title="$trans('finance.report.payment_method_wise_fee_payment.payment_method_wise_fee_payment')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="finance.report.payment_method_wise_fee_payment">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid">
              <DataCell name="name">{{ item.name || item.title || item.label }}</DataCell>
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>
</template>

<script setup>
import { reactive } from 'vue';
const initUrl = 'finance/report/paymentMethodWiseFeePayment/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
