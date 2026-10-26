<template>
  <ListItem :init-url="initUrl" :additional-query="{ details: true }" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('resource.online_class.online_class')"
        :navs="[{ label: $trans('resource.resource'), path: 'Resource' }]"
      >
        <PageHeaderAction
          url="resource/onlineClass/" name="ResourceOnlineClass"
          :title="$trans('resource.online_class.online_class')"
          :actions="['create', 'filter']"
          :dropdown-actions="['print', 'pdf', 'excel']"
          @toggle-filter="showFilter = !showFilter"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="resource.online_class" @refresh="emitter.emit('listItems')">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid"
              @double-click="router.push({ name: 'ResourceOnlineClassShow', params: { uuid: item.uuid } })">
              <DataCell name="topic">{{ item.topic }}</DataCell>
              <DataCell name="subject">{{ item.subject }}</DataCell>
              <DataCell name="platform">{{ item.platform }}</DataCell>
              <DataCell name="meetingCode">{{ item.meetingCode }}</DataCell>
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
              <DataCell name="action">
                <FloatingMenu>
                  <FloatingMenuItem icon="fas fa-arrow-circle-right" @click="router.push({ name: 'ResourceOnlineClassShow', params: { uuid: item.uuid } })">{{ $trans('general.show') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-edit" @click="router.push({ name: 'ResourceOnlineClassEdit', params: { uuid: item.uuid } })">{{ $trans('general.edit') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-copy" @click="router.push({ name: 'ResourceOnlineClassDuplicate', params: { uuid: item.uuid } })">{{ $trans('general.duplicate') }}</FloatingMenuItem>
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
const initUrl = 'resource/onlineClass/';
const showFilter = ref(false);
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
