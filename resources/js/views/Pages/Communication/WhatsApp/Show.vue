<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.whats_app.whats_app'), path: 'CommunicationWhatsAppList' },
    ]"
  >
    <PageHeaderAction name="CommunicationWhatsApp" :title="$trans('communication.whats_app.whats_app')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'CommunicationWhatsApp' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('communication.whats_app.whats_app') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('communication.whats_app.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('communication.whats_app.props.studentAudienceType')">{{ item.studentAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.whats_app.props.employeeAudienceType')">{{ item.employeeAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.whats_app.props.templateCode')">{{ item.templateCode }}</ListItemView>
                <ListItemView :label="$trans('communication.whats_app.props.content')">{{ item.content }}</ListItemView>
                <ListItemView :label="$trans('communication.whats_app.props.template')">{{ item.template }}</ListItemView>
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
const initUrl = 'communication/whatsapp/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
