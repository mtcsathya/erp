<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('transport.vehicle.detail.case_record.case_record')"
        :navs="[{ label: $trans('transport.transport'), path: 'Transport' }]"
      >
        <PageHeaderAction
          url="transport/vehicle/detail/caseRecord/" name="TransportVehicleDetailCaseRecord"
          :title="$trans('transport.vehicle.detail.case_record.case_record')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="transport.vehicle.detail.case_record">
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
const initUrl = 'transport/vehicle/detail/caseRecord/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
