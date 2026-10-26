<template>
  <ModuleConfig :title="$trans('resource.config.general')">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      action="config"
    >
      <div class="space-y-4">
        <!-- TODO: Add config fields from beautified source -->
        <p class="text-gray-500">Configuration settings to be reconstructed</p>
      </div>
    </FormAction>
  </ModuleConfig>
</template>

<script setup>
import { reactive } from 'vue';

const initUrl = 'resource/config/';
const initForm = {};
const form = reactive({});

const setForm = (data) => {
    Object.assign(form, data);
};
</script>
