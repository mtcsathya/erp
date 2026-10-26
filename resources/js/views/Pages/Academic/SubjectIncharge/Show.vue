<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.subject_incharge.subject_incharge'), path: 'AcademicSubjectInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicSubjectIncharge" :title="$trans('academic.subject_incharge.subject_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicSubjectIncharge' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.subject_incharge.subject_incharge') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.subject_incharge.props.batch')">{{ item.batch }}</ListItemView>
                <ListItemView :label="$trans('academic.subject_incharge.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('academic.subject_incharge.props.employee')">{{ item.employee }}</ListItemView>
                <ListItemView :label="$trans('academic.subject_incharge.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('academic.subject_incharge.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('academic.subject_incharge.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'academic/subjectIncharge/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
