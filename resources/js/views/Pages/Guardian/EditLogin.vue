<template>
  <PageHeader
    :title="$trans('global.edit', { attribute: $trans('guardian.guardian') })"
    :navs="[
      { label: $trans('guardian.guardian'), path: 'GuardianList' },
      { label: item.name || '', path: { name: 'GuardianShow', params: { uuid: $route.params.uuid } } },
    ]"
  />

  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('guardian.props.login') }}</template>
      <FormAction
        :init-url="initUrl"
        :init-form="initForm"
        :form="form"
        :set-form="setForm"
        :redirect="{ name: 'GuardianShow', params: { uuid: $route.params.uuid } }"
      >
        <div class="grid grid-cols-3 gap-6">
          <!-- TODO: Add login edit fields from beautified source -->
          <div class="col-span-3">
            <p class="text-gray-500">Edit login form - fields to be reconstructed</p>
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
const initUrl = 'guardians/';
const initForm = {};
const form = reactive({});
const item = reactive({});

const setForm = (data) => {
    Object.assign(form, data);
    Object.assign(item, data);
};
</script>
