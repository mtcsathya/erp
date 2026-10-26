<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('asset.asset'), path: 'Asset' },
      { label: $trans('asset.floor.floor'), path: 'AssetBuildingFloorList' },
    ]"
  >
    <PageHeaderAction name="AssetBuildingFloor" :title="$trans('asset.floor.floor')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AssetBuildingFloor' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('asset.floor.floor') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('asset.floor.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('asset.floor.props.alias')">{{ item.alias }}</ListItemView>
                <ListItemView :label="$trans('asset.floor.props.block')">{{ item.block }}</ListItemView>
                <ListItemView :label="$trans('asset.floor.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'asset/building/floor/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
