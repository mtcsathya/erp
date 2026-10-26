<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.department.department'), path: 'AcademicDepartmentList' },
    ]"
  >
    <PageHeaderAction
      name="AcademicDepartment"
      :title="$trans('academic.department.department')"
      :actions="['list']"
    />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem
      :init-url="initUrl"
      :uuid="$route.params.uuid"
      @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicDepartment' })"
    >
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <div class="space-y-2">
              <BaseCard no-padding no-content-padding>
                <template #title>{{ $trans('academic.department.department') }}</template>
                <ListContainerVertical>
                  <ListItemView :label="$trans('academic.department.props.name')">
                    {{ item.name }}
                  </ListItemView>
                  <ListItemView :label="$trans('academic.department.props.code')">
                    {{ item.code }}
                    <TextMuted block>{{ item.shortcode }}</TextMuted>
                  </ListItemView>
                  <ListItemView :label="$trans('academic.department.props.alias')">
                    {{ item.alias }}
                  </ListItemView>
                  <ListItemView :label="$trans('general.created_at')">
                    {{ item.createdAt.formatted }}
                  </ListItemView>
                  <ListItemView :label="$trans('general.updated_at')">
                    {{ item.updatedAt.formatted }}
                  </ListItemView>
                </ListContainerVertical>
              </BaseCard>
            </div>
          </template>

          <template #default>
            <BaseCard no-padding no-content-padding bottom-content-padding>
              <template #title>
                {{ $trans('global.detail', { attribute: $trans('academic.department.department') }) }}
              </template>

              <SimpleTable v-if="item.programs?.length > 0" :header="programHeaders">
                <DataRow v-for="program in item.programs" :key="program.uuid">
                  <DataCell name="program">
                    {{ program.name }}
                    <TextMuted block>{{ program.type?.label }}</TextMuted>
                  </DataCell>
                  <DataCell name="code">{{ program.code }}</DataCell>
                  <DataCell name="action"></DataCell>
                </DataRow>
              </SimpleTable>

              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 px-4 pt-4 sm:grid-cols-2">
                <BaseDataView
                  class="col-span-1 sm:col-span-2"
                  :label="$trans('academic.department.props.description')"
                  paragraph
                >
                  {{ item.description }}
                </BaseDataView>
              </dl>
            </BaseCard>
          </template>
        </DetailLayoutVertical>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const $trans = inject('$trans');

const initUrl = 'academic/department/';

const programHeaders = [
    { key: 'program', label: $trans('academic.program.program'), visibility: true },
    { key: 'code', label: $trans('academic.program.props.code'), visibility: true },
    { key: 'action', label: '', visibility: true },
];

const item = reactive({});

const setItem = (data) => {
    Object.assign(item, data);
};
</script>
