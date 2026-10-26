<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.type.type'), path: 'EmployeeAttendanceTypeList' },
    ]"
  >
    <PageHeaderAction name="EmployeeAttendanceType" :title="$trans('employee.type.type')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'EmployeeAttendanceType' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('employee.type.type') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('employee.type.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('employee.type.props.code')">{{ item.code }}</ListItemView>
                <ListItemView :label="$trans('employee.type.props.color')">{{ item.color }}</ListItemView>
                <ListItemView :label="$trans('employee.type.props.category')">{{ item.category }}</ListItemView>
                <ListItemView :label="$trans('employee.type.props.alias')">{{ item.alias }}</ListItemView>
                <ListItemView :label="$trans('employee.type.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'employee/attendance/type/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
