<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.course.course'), path: 'AcademicCourseList' },
    ]"
  >
    <PageHeaderAction name="AcademicCourse" :title="$trans('academic.course.course')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicCourse' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.course.course') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.course.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.term')">{{ item.term }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.division')">{{ item.division }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.code')">{{ item.code }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.shortcode')">{{ item.shortcode }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.position')">{{ item.position }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.pgAccount')">{{ item.pgAccount }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.registrationFee')">{{ item.registrationFee }}</ListItemView>
                <ListItemView :label="$trans('academic.course.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'academic/course/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
