<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('hostel.hostel'), path: 'Hostel' },
      { label: $trans('hostel.block_incharge.block_incharge'), path: 'HostelBlockInchargeList' },
    ]"
  >
    <PageHeaderAction name="HostelBlockIncharge" :title="$trans('hostel.block_incharge.block_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'HostelBlockIncharge' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('hostel.block_incharge.block_incharge') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('hostel.block_incharge.props.block')">{{ item.block }}</ListItemView>
                <ListItemView :label="$trans('hostel.block_incharge.props.employee')">{{ item.employee }}</ListItemView>
                <ListItemView :label="$trans('hostel.block_incharge.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('hostel.block_incharge.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('hostel.block_incharge.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'hostel/blockIncharge/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
