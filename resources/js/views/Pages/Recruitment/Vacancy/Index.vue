<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('recruitment.vacancy.vacancy')"
        :navs="[{ label: $trans('recruitment.recruitment'), path: 'Recruitment' }]"
      >
        <PageHeaderAction
          url="recruitment/vacancy/" name="RecruitmentVacancy"
          :title="$trans('recruitment.vacancy.vacancy')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="recruitment.vacancy">
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
const initUrl = 'recruitment/vacancy/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
