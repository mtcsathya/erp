<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('finance.report.fee_concession_summary.fee_concession_summary')"
        :navs="[{ label: $trans('finance.finance'), path: 'Finance' }]"
      >
        <PageHeaderAction
          url="finance/report/feeConcessionSummary/" name="FinanceReportFeeConcessionSummary"
          :title="$trans('finance.report.fee_concession_summary.fee_concession_summary')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="finance.report.fee_concession_summary">
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
const initUrl = 'finance/report/feeConcessionSummary/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
