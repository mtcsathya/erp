<template>
  <PageHeader
    :title="$trans('global.edit', { attribute: $trans('student.student') })"
    :navs="[
      { label: $trans('student.student'), path: 'StudentList' },
      { label: item.name || '', path: { name: 'StudentShow', params: { uuid: $route.params.uuid } } },
    ]"
  />

  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('student.props.basic') }}</template>
      <FormAction
        :init-url="initUrl"
        :init-form="initForm"
        :form="form"
        :set-form="setForm"
        :redirect="{ name: 'StudentShow', params: { uuid: $route.params.uuid } }"
      >
        <div class="grid grid-cols-3 gap-6">
          <!-- TODO: Add basic edit fields from beautified source -->
          <div class="col-span-3">
            <p class="text-gray-500">Edit basic form - fields to be reconstructed</p>
          </div>
        </div>
      </FormAction>
    </BaseCard>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const initUrl = 'students/';
const initForm = {};
const form = reactive({});
const item = reactive({});

const setForm = (data) => {
    Object.assign(form, data);
    Object.assign(item, data);
};
</script>
