<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('asset.asset'), path: 'Asset' },
      { label: $trans('asset.block.block'), path: 'AssetBuildingBlockList' },
    ]"
  >
    <PageHeaderAction name="AssetBuildingBlock" :title="$trans('asset.block.block')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AssetBuildingBlockForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AssetBuildingBlockForm from './Form.vue';
const route = useRoute();
</script>
