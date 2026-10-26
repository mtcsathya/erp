<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3">
      <BaseInput type="text" :modelValue="modelValue.addressLine1" @update:modelValue="update('addressLine1', $event)"
        name="addressLine1" :label="$trans('contact.props.address_line_1')" />
    </div>
    <div class="col-span-3">
      <BaseInput type="text" :modelValue="modelValue.addressLine2" @update:modelValue="update('addressLine2', $event)"
        name="addressLine2" :label="$trans('contact.props.address_line_2')" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.city" @update:modelValue="update('city', $event)"
        name="city" :label="$trans('contact.props.city')" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.state" @update:modelValue="update('state', $event)"
        name="state" :label="$trans('contact.props.state')" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.zipcode" @update:modelValue="update('zipcode', $event)"
        name="zipcode" :label="$trans('contact.props.zipcode')" />
    </div>
    <div class="col-span-3 sm:col-span-1">
      <BaseInput type="text" :modelValue="modelValue.country" @update:modelValue="update('country', $event)"
        name="country" :label="$trans('contact.props.country')" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    modelValue: { type: Object, default: () => ({ addressLine1: '', addressLine2: '', city: '', state: '', zipcode: '', country: '' }) },
});
const emit = defineEmits(['update:modelValue']);
const update = (key, val) => {
    emit('update:modelValue', { ...props.modelValue, [key]: val });
};
</script>
