<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.batch.batch'), path: 'AcademicBatchList' },
    ]"
  >
    <PageHeaderAction name="AcademicBatch" :title="$trans('academic.batch.batch')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicBatch' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.batch.batch') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.batch.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('academic.batch.props.course')">{{ item.course }}</ListItemView>
                <ListItemView :label="$trans('academic.batch.props.maxStrength')">{{ item.maxStrength }}</ListItemView>
                <ListItemView :label="$trans('academic.batch.props.rollNumberPrefix')">{{ item.rollNumberPrefix }}</ListItemView>
                <ListItemView :label="$trans('academic.batch.props.position')">{{ item.position }}</ListItemView>
                <ListItemView :label="$trans('academic.batch.props.pgAccount')">{{ item.pgAccount }}</ListItemView>
                <ListItemView :label="$trans('academic.batch.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'academic/batch/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
