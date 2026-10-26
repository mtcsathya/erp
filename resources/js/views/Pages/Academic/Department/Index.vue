<template>
  <ListItem
    :init-url="initUrl"
    :additional-query="{ details: true }"
    @set-items="setItems"
  >
    <template #header>
      <PageHeader
        :title="$trans('academic.department.department')"
        :navs="[{ label: $trans('academic.academic'), path: 'Academic' }]"
      >
        <PageHeaderAction
          url="academic/departments/"
          name="AcademicDepartment"
          :title="$trans('academic.department.department')"
          :actions="actions"
          :dropdown-actions="dropdownActions"
          :additional-dropdown-actions-query="{ details: true }"
          @toggle-filter="showFilter = !showFilter"
        >
          <BaseButton
            design="white"
            v-tooltip="$trans('global.reorder', { attribute: $trans('academic.department.department') })"
            @click="showReorder = !showReorder"
          >
            <i class="fas fa-arrows-up-down-left-right"></i>
          </BaseButton>
          <BaseButton design="white" @click="router.push({ name: 'AcademicDepartmentIncharge' })">
            {{ $trans('employee.incharge.incharge') }}
          </BaseButton>
        </PageHeaderAction>
      </PageHeader>
    </template>

    <template #filter>
      <ParentTransition appear :visibility="showFilter">
        <DepartmentFilter
          @refresh="emitter.emit('listItems')"
          @hide="showFilter = false"
        />
      </ParentTransition>
    </template>

    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable
          :header="items.headers"
          :meta="items.meta"
          module="academic.department"
          @refresh="emitter.emit('listItems')"
        >
          <template #actionButton>
            <BaseButton @click="router.push({ name: 'AcademicDepartmentCreate' })">
              {{ $trans('global.add', { attribute: $trans('academic.department.department') }) }}
            </BaseButton>
          </template>

          <template #default>
            <DataRow
              v-for="department in items.data"
              :key="department.uuid"
              @double-click="router.push({ name: 'AcademicDepartmentShow', params: { uuid: department.uuid } })"
            >
              <DataCell name="name">{{ department.name }}</DataCell>
              <DataCell name="programCount">{{ department.programsCount }}</DataCell>
              <DataCell name="code">
                {{ department.code }}
                <TextMuted block>{{ department.shortcode }}</TextMuted>
              </DataCell>
              <DataCell name="alias">{{ department.alias }}</DataCell>
              <DataCell name="incharge">
                <div v-for="incharge in department.incharges" :key="incharge">
                  {{ incharge?.employee?.name || '-' }}
                  <TextMuted block>{{ incharge?.period }}</TextMuted>
                </div>
              </DataCell>
              <DataCell name="createdAt">{{ department.createdAt.formatted }}</DataCell>
              <DataCell name="action">
                <FloatingMenu>
                  <FloatingMenuItem
                    icon="fas fa-arrow-circle-right"
                    @click="router.push({ name: 'AcademicDepartmentShow', params: { uuid: department.uuid } })"
                  >
                    {{ $trans('general.show') }}
                  </FloatingMenuItem>
                  <FloatingMenuItem
                    icon="fas fa-edit"
                    @click="router.push({ name: 'AcademicDepartmentEdit', params: { uuid: department.uuid } })"
                  >
                    {{ $trans('general.edit') }}
                  </FloatingMenuItem>
                  <FloatingMenuItem
                    icon="fas fa-copy"
                    @click="router.push({ name: 'AcademicDepartmentDuplicate', params: { uuid: department.uuid } })"
                  >
                    {{ $trans('general.duplicate') }}
                  </FloatingMenuItem>
                  <FloatingMenuItem
                    icon="fas fa-trash"
                    @click="emitter.emit('deleteItem', { uuid: department.uuid })"
                  >
                    {{ $trans('general.delete') }}
                  </FloatingMenuItem>
                </FloatingMenu>
              </DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>

  <!-- Reorder modal -->
  <AcademicDepartmentReorder
    v-if="showReorder"
    :visibility="showReorder"
    @close="showReorder = false"
    @refresh="emitter.emit('listItems')"
  />
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
import DepartmentFilter from './Filter.vue';
import AcademicDepartmentReorder from './Reorder.vue';

const router = useRouter();
const emitter = inject('emitter');

const initUrl = 'academic/department/';
const actions = ['create', 'filter'];
const dropdownActions = ['print', 'pdf', 'excel'];

const showFilter = ref(false);
const showReorder = ref(false);
const items = reactive({});

const setItems = (data) => {
    Object.assign(items, data);
};
</script>
