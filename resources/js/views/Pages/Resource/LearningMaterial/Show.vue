<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.learning_material.learning_material'), path: 'ResourceLearningMaterialList' },
    ]"
  >
    <PageHeaderAction name="ResourceLearningMaterial" :title="$trans('resource.learning_material.learning_material')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ResourceLearningMaterial' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('resource.learning_material.learning_material') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('resource.learning_material.props.title')">{{ item.title }}</ListItemView>
                <ListItemView :label="$trans('resource.learning_material.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('resource.learning_material.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'resource/learningMaterial/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
