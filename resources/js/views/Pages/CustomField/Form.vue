<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="CustomField"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.form"
          name="form"
          :label="$trans('custom_field.props.form')"
          v-model:error="formErrors.form"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('custom_field.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.label"
          name="label"
          :label="$trans('custom_field.props.label')"
          v-model:error="formErrors.label"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.minLength"
          name="minLength"
          :label="$trans('custom_field.props.minLength')"
          v-model:error="formErrors.minLength"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maxLength"
          name="maxLength"
          :label="$trans('custom_field.props.maxLength')"
          v-model:error="formErrors.maxLength"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.minValue"
          name="minValue"
          :label="$trans('custom_field.props.minValue')"
          v-model:error="formErrors.minValue"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maxValue"
          name="maxValue"
          :label="$trans('custom_field.props.maxValue')"
          v-model:error="formErrors.maxValue"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.options"
          name="options"
          :label="$trans('custom_field.props.options')"
          v-model:error="formErrors.options"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isRequired"
          name="isRequired"
          :label="$trans('custom_field.props.isRequired')"
          v-model:error="formErrors.isRequired"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.position"
          name="position"
          :label="$trans('custom_field.props.position')"
          v-model:error="formErrors.position"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'customField/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    form: '',
    type: '',
    label: '',
    minLength: '',
    maxLength: '',
    minValue: '',
    maxValue: '',
    options: '',
    isRequired: false,
    position: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
