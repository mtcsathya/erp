<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('employee.employee'), path: 'Employee' },
      { label: $trans('employee.salary_template.salary_template'), path: 'EmployeePayrollSalaryTemplateList' },
    ]"
  >
    <PageHeaderAction name="EmployeePayrollSalaryTemplate" :title="$trans('employee.salary_template.salary_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'EmployeePayrollSalaryTemplate' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('employee.salary_template.salary_template') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('employee.salary_template.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('employee.salary_template.props.alias')">{{ item.alias }}</ListItemView>
                <ListItemView :label="$trans('employee.salary_template.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'employee/payroll/salaryTemplate/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
