<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('transport.transport'), path: 'Transport' },
      { label: $trans('transport.incharge.incharge'), path: 'TransportVehicleInchargeList' },
    ]"
  >
    <PageHeaderAction name="TransportVehicleIncharge" :title="$trans('transport.incharge.incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'TransportVehicleIncharge' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('transport.incharge.incharge') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('transport.incharge.props.vehicle')">{{ item.vehicle }}</ListItemView>
                <ListItemView :label="$trans('transport.incharge.props.type')">{{ item.type }}</ListItemView>
                <ListItemView :label="$trans('transport.incharge.props.employee')">{{ item.employee }}</ListItemView>
                <ListItemView :label="$trans('transport.incharge.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('transport.incharge.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('transport.incharge.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'transport/vehicle/incharge/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
