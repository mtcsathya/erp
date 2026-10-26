<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('resource.resource'), path: 'Resource' },
      { label: $trans('resource.lesson_plan.lesson_plan'), path: 'ResourceLessonPlanList' },
    ]"
  >
    <PageHeaderAction name="ResourceLessonPlan" :title="$trans('resource.lesson_plan.lesson_plan')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ResourceLessonPlan' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('resource.lesson_plan.lesson_plan') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('resource.lesson_plan.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('resource.lesson_plan.props.topic')">{{ item.topic }}</ListItemView>
                <ListItemView :label="$trans('resource.lesson_plan.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('resource.lesson_plan.props.endDate')">{{ item.endDate }}</ListItemView>
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
const initUrl = 'resource/lessonPlan/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
