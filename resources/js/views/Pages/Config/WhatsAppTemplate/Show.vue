<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('config.config'), path: 'Config' },
      { label: $trans('config.whats_app_template.whats_app_template'), path: 'ConfigWhatsAppTemplateList' },
    ]"
  >
    <PageHeaderAction name="ConfigWhatsAppTemplate" :title="$trans('config.whats_app_template.whats_app_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ConfigWhatsAppTemplate' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('config.whats_app_template.whats_app_template') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('config.whats_app_template.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('config.whats_app_template.props.content')">{{ item.content }}</ListItemView>
                <ListItemView :label="$trans('config.whats_app_template.props.templateId')">{{ item.templateId }}</ListItemView>
                <ListItemView :label="$trans('config.whats_app_template.props.variablesDisplay')">{{ item.variablesDisplay }}</ListItemView>
                <ListItemView :label="$trans('general.created_at')">{{ item.createdAt?.formatted }}</ListItemView>
                <ListItemView :label="$trans('general.updated_at')">{{ item.updatedAt?.formatted }}</ListItemView>
              </ListContainerVertical>
            </BaseCard>
          </template>
        </DetailLayoutVertical>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const initUrl = 'config/whatsappTemplate/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
