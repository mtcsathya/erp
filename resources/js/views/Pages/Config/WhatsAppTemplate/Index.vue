<template>
  <ListItem :init-url="initUrl" :additional-query="{ details: true }" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('config.whats_app_template.whats_app_template')"
        :navs="[{ label: $trans('config.config'), path: 'Config' }]"
      >
        <PageHeaderAction
          url="config/whatsappTemplate/" name="ConfigWhatsAppTemplate"
          :title="$trans('config.whats_app_template.whats_app_template')"
          :actions="['create', 'filter']"
          :dropdown-actions="['print', 'pdf', 'excel']"
          @toggle-filter="showFilter = !showFilter"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="config.whats_app_template" @refresh="emitter.emit('listItems')">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid"
              @double-click="router.push({ name: 'ConfigWhatsAppTemplateShow', params: { uuid: item.uuid } })">
              <DataCell name="subject">{{ item.subject }}</DataCell>
              <DataCell name="content">{{ item.content }}</DataCell>
              <DataCell name="templateId">{{ item.templateId }}</DataCell>
              <DataCell name="variablesDisplay">{{ item.variablesDisplay }}</DataCell>
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
              <DataCell name="action">
                <FloatingMenu>
                  <FloatingMenuItem icon="fas fa-arrow-circle-right" @click="router.push({ name: 'ConfigWhatsAppTemplateShow', params: { uuid: item.uuid } })">{{ $trans('general.show') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-edit" @click="router.push({ name: 'ConfigWhatsAppTemplateEdit', params: { uuid: item.uuid } })">{{ $trans('general.edit') }}</FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-copy" @click="router.push({ name: 'ConfigWhatsAppTemplateDuplicate', params: { uuid: item.uuid } })">{{ $trans('general.duplicate') }}</FloatingMenuItem>
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
const initUrl = 'config/whatsappTemplate/';
const showFilter = ref(false);
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
