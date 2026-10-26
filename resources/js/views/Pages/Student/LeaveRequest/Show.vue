<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.leave_request.leave_request'), path: 'StudentLeaveRequestList' },
    ]"
  >
    <PageHeaderAction name="StudentLeaveRequest" :title="$trans('student.leave_request.leave_request')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'StudentLeaveRequest' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('student.leave_request.leave_request') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('student.leave_request.props.student')">{{ item.student }}</ListItemView>
                <ListItemView :label="$trans('student.leave_request.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('student.leave_request.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('student.leave_request.props.reason')">{{ item.reason }}</ListItemView>
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
const initUrl = 'student/leaveRequest/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
