<template>
  <FilterForm :init-form="initForm" :form="form" @hide="$emit('hide')">
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput type="text" v-model="form.name" name="name" :label="$trans('academic.department.props.name')" />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput type="text" v-model="form.code" name="code" :label="$trans('academic.department.props.code')" />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput type="text" v-model="form.shortcode" name="shortcode" :label="$trans('academic.department.props.shortcode')" />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput type="text" v-model="form.alias" name="alias" :label="$trans('academic.department.props.alias')" />
      </div>
    </div>
  </FilterForm>
</template>

<script setup>
import { reactive } from 'vue';

defineEmits(['hide']);

const initForm = { name: '', code: '', shortcode: '', alias: '' };
const form = reactive({ ...initForm });
</script>
