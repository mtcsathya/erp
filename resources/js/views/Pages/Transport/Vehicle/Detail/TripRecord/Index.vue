<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('transport.vehicle.detail.trip_record.trip_record')"
        :navs="[{ label: $trans('transport.transport'), path: 'Transport' }]"
      >
        <PageHeaderAction
          url="transport/vehicle/detail/tripRecord/" name="TransportVehicleDetailTripRecord"
          :title="$trans('transport.vehicle.detail.trip_record.trip_record')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="transport.vehicle.detail.trip_record">
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
const initUrl = 'transport/vehicle/detail/tripRecord/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
