<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.room_allocation.room_allocation'), path: 'HostelRoomAllocationList' },
    ]"
  >
    <PageHeaderAction name="HostelRoomAllocation" :title="$trans('hostel.room_allocation.room_allocation')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'HostelRoomAllocation' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('hostel.room_allocation.room_allocation') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('hostel.room_allocation.props.room')">{{ item.room }}</ListItemView>
                <ListItemView :label="$trans('hostel.room_allocation.props.student')">{{ item.student }}</ListItemView>
                <ListItemView :label="$trans('hostel.room_allocation.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('hostel.room_allocation.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('hostel.room_allocation.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'hostel/roomAllocation/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
