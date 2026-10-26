<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.online_class.online_class'), path: 'ResourceOnlineClassList' },
    ]"
  >
    <PageHeaderAction name="ResourceOnlineClass" :title="$trans('resource.online_class.online_class')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ResourceOnlineClass' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('resource.online_class.online_class') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('resource.online_class.props.topic')">{{ item.topic }}</ListItemView>
                <ListItemView :label="$trans('resource.online_class.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('resource.online_class.props.platform')">{{ item.platform }}</ListItemView>
                <ListItemView :label="$trans('resource.online_class.props.meetingCode')">{{ item.meetingCode }}</ListItemView>
                <ListItemView :label="$trans('resource.online_class.props.url')">{{ item.url }}</ListItemView>
                <ListItemView :label="$trans('resource.online_class.props.password')">{{ item.password }}</ListItemView>
                <ListItemView :label="$trans('resource.online_class.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'resource/onlineClass/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
