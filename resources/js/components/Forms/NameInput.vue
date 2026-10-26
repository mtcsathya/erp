<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.firstName" @update:modelValue="update('firstName', $event)"
        name="firstName" :label="$trans('contact.props.first_name')" v-model:error="errors.firstName" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.middleName" @update:modelValue="update('middleName', $event)"
        name="middleName" :label="$trans('contact.props.middle_name')" v-model:error="errors.middleName" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.thirdName" @update:modelValue="update('thirdName', $event)"
        name="thirdName" :label="$trans('contact.props.third_name')" v-model:error="errors.thirdName" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.lastName" @update:modelValue="update('lastName', $event)"
        name="lastName" :label="$trans('contact.props.last_name')" v-model:error="errors.lastName" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    modelValue: { type: Object, default: () => ({ firstName: '', middleName: '', thirdName: '', lastName: '' }) },
    errors: { type: Object, default: () => ({}) },
});
const emit = defineEmits(['update:modelValue']);
const update = (key, val) => {
    emit('update:modelValue', { ...props.modelValue, [key]: val });
};
</script>
