<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('discipline.incident.incident')"
        :navs="[{ label: $trans('discipline.discipline'), path: 'Discipline' }]"
      >
        <PageHeaderAction
          url="discipline/incident/" name="DisciplineIncident"
          :title="$trans('discipline.incident.incident')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="discipline.incident">
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
const initUrl = 'discipline/incident/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
