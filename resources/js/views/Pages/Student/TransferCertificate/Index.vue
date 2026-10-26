<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('student.transfer_certificate.transfer_certificate')"
        :navs="[{ label: $trans('student.student'), path: 'Student' }]"
      >
        <PageHeaderAction
          url="student/transferCertificate/" name="StudentTransferCertificate"
          :title="$trans('student.transfer_certificate.transfer_certificate')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="student.transfer_certificate">
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
const initUrl = 'student/transferCertificate/';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
