<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('activity.trip.participant.participant')"
        :navs="[{ label: $trans('activity.activity'), path: 'Activity' }]"
      >
        <PageHeaderAction
          url="activity/trip/participant/" name="ActivityTripParticipant"
          :title="$trans('activity.trip.participant.participant')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="activity.trip.participant">
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
const initUrl = 'activity/trip/participant/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
