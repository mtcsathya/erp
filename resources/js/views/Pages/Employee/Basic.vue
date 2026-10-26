<template>
  <PageHeader
    :title="$trans('employee.props.basic')"
    :navs="[
      { label: $trans('employee.employee'), path: 'EmployeeList' },
      { label: item.name || '', path: { name: 'EmployeeShow', params: { uuid: $route.params.uuid } } },
    ]"
  />

  <ParentTransition appear :visibility="true">
    <ShowItem
      :init-url="initUrl"
      :uuid="$route.params.uuid"
      @set-item="setItem"
    >
      <template v-if="item.uuid">
        <BaseCard no-padding no-content-padding>
          <template #title>{{ $trans('employee.props.basic') }}</template>
          <ListContainerVertical>
            <!-- TODO: Add basic detail fields from beautified source -->
            <ListItemView :label="$trans('general.name')">{{ item.name }}</ListItemView>
          </ListContainerVertical>
        </BaseCard>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const initUrl = 'employees/';
const item = reactive({});

const setItem = (data) => {
    Object.assign(item, data);
};
</script>
