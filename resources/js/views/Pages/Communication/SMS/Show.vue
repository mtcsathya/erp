<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.s_m_s.s_m_s'), path: 'CommunicationSMSList' },
    ]"
  >
    <PageHeaderAction name="CommunicationSMS" :title="$trans('communication.s_m_s.s_m_s')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'CommunicationSMS' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('communication.s_m_s.s_m_s') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('communication.s_m_s.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('communication.s_m_s.props.studentAudienceType')">{{ item.studentAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.s_m_s.props.employeeAudienceType')">{{ item.employeeAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.s_m_s.props.inclusion')">{{ item.inclusion }}</ListItemView>
                <ListItemView :label="$trans('communication.s_m_s.props.exclusion')">{{ item.exclusion }}</ListItemView>
                <ListItemView :label="$trans('communication.s_m_s.props.content')">{{ item.content }}</ListItemView>
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
const initUrl = 'communication/sms/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
