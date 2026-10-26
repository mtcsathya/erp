<template>
  <ListItem :init-url="initUrl" :additional-query="{ details: true }" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('employee.type.type')"
        :navs="[{ label: $trans('employee.employee'), path: 'Employee' }]"
      >
        <PageHeaderAction
          url="employee/leave/type/" name="EmployeeLeaveType"
          :title="$trans('employee.type.type')"
          :actions="['create', 'filter']"
          :dropdown-actions="['print', 'pdf', 'excel']"
          @toggle-filter="showFilter = !showFilter"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="employee.type" @refresh="emitter.emit('listItems')">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid"
              @double-click="router.push({ name: 'EmployeeLeaveTypeShow', params: { uuid: item.uuid } })">
              <DataCell name="name">{{ item.name }}</DataCell>
              <DataCell name="code">{{ item.code }}</DataCell>
              <DataCell name="alias">{{ item.alias }}</DataCell>
              <DataCell name="description">{{ item.description }}</DataCell>
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
              <DataCell name="action">
                <FloatingMenu>
                  <FloatingMenuItem icon="fas fa-arrow-circle-right" @click="router.push({ name: 'EmployeeLeaveTypeShow', params: { uuid: item.uuid } })">{{ $trans('general.show') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-edit" @click="router.push({ name: 'EmployeeLeaveTypeEdit', params: { uuid: item.uuid } })">{{ $trans('general.edit') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-copy" @click="router.push({ name: 'EmployeeLeaveTypeDuplicate', params: { uuid: item.uuid } })">{{ $trans('general.duplicate') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-trash" @click="emitter.emit('deleteItem', { uuid: item.uuid })">{{ $trans('general.delete') }}</FloatingMenuItem>
                </FloatingMenu>
              </DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const emitter = inject('emitter');
const initUrl = 'employee/leave/type/';
const showFilter = ref(false);
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
