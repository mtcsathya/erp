<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('finance.payment_method.payment_method')"
        :navs="[{ label: $trans('finance.finance'), path: 'Finance' }]"
      >
        <PageHeaderAction
          url="finance/paymentMethod/" name="FinancePaymentMethod"
          :title="$trans('finance.payment_method.payment_method')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="finance.payment_method">
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
const initUrl = 'finance/paymentMethod/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
