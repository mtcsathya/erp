<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('reception.reception'), path: 'Reception' },
      { label: $trans('reception.call_log.call_log'), path: 'ReceptionCallLogList' },
    ]"
  >
    <PageHeaderAction name="ReceptionCallLog" :title="$trans('reception.call_log.call_log')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ReceptionCallLog' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('reception.call_log.call_log') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('reception.call_log.props.type')">{{ item.type }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.purpose')">{{ item.purpose }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.callAt')">{{ item.callAt }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.duration')">{{ item.duration }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.incomingNumber')">{{ item.incomingNumber }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.outgoingNumber')">{{ item.outgoingNumber }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.conversation')">{{ item.conversation }}</ListItemView>
                <ListItemView :label="$trans('reception.call_log.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'reception/callLog/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
