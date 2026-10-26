<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.room.room'), path: 'HostelRoomList' },
    ]"
  >
    <PageHeaderAction name="HostelRoom" :title="$trans('hostel.room.room')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'HostelRoom' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('hostel.room.room') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('hostel.room.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('hostel.room.props.number')">{{ item.number }}</ListItemView>
                <ListItemView :label="$trans('hostel.room.props.floor')">{{ item.floor }}</ListItemView>
                <ListItemView :label="$trans('hostel.room.props.capacity')">{{ item.capacity }}</ListItemView>
                <ListItemView :label="$trans('hostel.room.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'hostel/room/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
