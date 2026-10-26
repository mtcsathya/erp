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
    <AssetBuildingFloorForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AssetBuildingFloorForm from './Form.vue';
const route = useRoute();
</script>
