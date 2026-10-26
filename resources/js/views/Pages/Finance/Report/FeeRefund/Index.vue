<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('finance.report.fee_refund.fee_refund')"
        :navs="[{ label: $trans('finance.finance'), path: 'Finance' }]"
      >
        <PageHeaderAction
          url="finance/report/feeRefund/" name="FinanceReportFeeRefund"
          :title="$trans('finance.report.fee_refund.fee_refund')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="finance.report.fee_refund">
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
const initUrl = 'finance/report/feeRefund/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
