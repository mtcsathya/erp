<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.division.division'), path: 'AcademicDivisionList' },
    ]"
  >
    <PageHeaderAction name="AcademicDivision" :title="$trans('academic.division.division')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicDivision' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.division.division') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.division.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('academic.division.props.code')">{{ item.code }}</ListItemView>
                <ListItemView :label="$trans('academic.division.props.shortcode')">{{ item.shortcode }}</ListItemView>
                <ListItemView :label="$trans('academic.division.props.program')">{{ item.program }}</ListItemView>
                <ListItemView :label="$trans('academic.division.props.position')">{{ item.position }}</ListItemView>
                <ListItemView :label="$trans('academic.division.props.pgAccount')">{{ item.pgAccount }}</ListItemView>
                <ListItemView :label="$trans('academic.division.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'academic/division/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
