<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.assignment.assignment'), path: 'ResourceAssignmentList' },
    ]"
  >
    <PageHeaderAction name="ResourceAssignment" :title="$trans('resource.assignment.assignment')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ResourceAssignment' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('resource.assignment.assignment') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('resource.assignment.props.title')">{{ item.title }}</ListItemView>
                <ListItemView :label="$trans('resource.assignment.props.type')">{{ item.type }}</ListItemView>
                <ListItemView :label="$trans('resource.assignment.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('resource.assignment.props.dueDate')">{{ item.dueDate }}</ListItemView>
                <ListItemView :label="$trans('resource.assignment.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'resource/assignment/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
