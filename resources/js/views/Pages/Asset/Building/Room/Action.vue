<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('asset.asset'), path: 'Asset' },
      { label: $trans('asset.room.room'), path: 'AssetBuildingRoomList' },
    ]"
  >
    <PageHeaderAction name="AssetBuildingRoom" :title="$trans('asset.room.room')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AssetBuildingRoomForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AssetBuildingRoomForm from './Form.vue';
const route = useRoute();
</script>
