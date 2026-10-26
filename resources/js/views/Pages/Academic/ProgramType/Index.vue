<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('academic.program_type.program_type')"
        :navs="[{ label: $trans('academic.academic'), path: 'Academic' }]"
      >
        <PageHeaderAction
          url="academic/programType/" name="AcademicProgramType"
          :title="$trans('academic.program_type.program_type')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="academic.program_type">
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
const initUrl = 'academic/programType/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
