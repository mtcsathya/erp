<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.department_incharge.department_incharge'), path: 'AcademicDepartmentInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicDepartmentIncharge" :title="$trans('academic.department_incharge.department_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicDepartmentIncharge' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.department_incharge.department_incharge') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.department_incharge.props.department')">{{ item.department }}</ListItemView>
                <ListItemView :label="$trans('academic.department_incharge.props.employee')">{{ item.employee }}</ListItemView>
                <ListItemView :label="$trans('academic.department_incharge.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('academic.department_incharge.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('academic.department_incharge.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'academic/departmentIncharge/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
