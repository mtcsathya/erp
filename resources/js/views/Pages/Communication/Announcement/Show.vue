<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.announcement.announcement'), path: 'CommunicationAnnouncementList' },
    ]"
  >
    <PageHeaderAction name="CommunicationAnnouncement" :title="$trans('communication.announcement.announcement')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'CommunicationAnnouncement' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('communication.announcement.announcement') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('communication.announcement.props.title')">{{ item.title }}</ListItemView>
                <ListItemView :label="$trans('communication.announcement.props.type')">{{ item.type }}</ListItemView>
                <ListItemView :label="$trans('communication.announcement.props.batch')">{{ item.batch }}</ListItemView>
                <ListItemView :label="$trans('communication.announcement.props.excerpt')">{{ item.excerpt }}</ListItemView>
                <ListItemView :label="$trans('communication.announcement.props.studentAudienceType')">{{ item.studentAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.announcement.props.employeeAudienceType')">{{ item.employeeAudienceType }}</ListItemView>
                <ListItemView :label="$trans('communication.announcement.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'communication/announcement/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
