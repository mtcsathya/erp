<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.email.email'), path: 'CommunicationEmailList' },
    ]"
  >
    <PageHeaderAction name="CommunicationEmail" :title="$trans('communication.email.email')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'CommunicationEmail' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('communication.email.email') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('communication.email.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('communication.email.props.studentAudienceType')">{{ item.studentAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.email.props.employeeAudienceType')">{{ item.employeeAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.email.props.inclusion')">{{ item.inclusion }}</ListItemView>
                <ListItemView :label="$trans('communication.email.props.exclusion')">{{ item.exclusion }}</ListItemView>
                <ListItemView :label="$trans('communication.email.props.content')">{{ item.content }}</ListItemView>
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
const initUrl = 'communication/email/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
