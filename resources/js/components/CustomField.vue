<template>
  <div v-for="field in fields" :key="field.uuid" class="col-span-3 sm:col-span-1">
    <BaseInput
      v-if="field.type === 'text' || field.type === 'number' || field.type === 'email'"
      :type="field.type"
      :name="`custom_${field.uuid}`"
      :label="field.label"
      :modelValue="values[field.uuid] || ''"
      @update:modelValue="updateField(field.uuid, $event)"
    />
    <BaseTextarea
      v-else-if="field.type === 'textarea'"
      :name="`custom_${field.uuid}`"
      :label="field.label"
      :modelValue="values[field.uuid] || ''"
      @update:modelValue="updateField(field.uuid, $event)"
    />
    <BaseSelect
      v-else-if="field.type === 'select'"
      :name="`custom_${field.uuid}`"
      :label="field.label"
      :options="field.options || []"
      :modelValue="values[field.uuid] || ''"
      @update:modelValue="updateField(field.uuid, $event)"
    />
    <BaseCheckbox
      v-else-if="field.type === 'checkbox'"
      :name="`custom_${field.uuid}`"
      :label="field.label"
      :modelValue="!!values[field.uuid]"
      @update:modelValue="updateField(field.uuid, $event)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
    fields: { type: Array, default: () => [] },
    values: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:values']);

function updateField(uuid, value) {
    const updated = { ...props.values, [uuid]: value };
    emit('update:values', updated);
}
</script>
