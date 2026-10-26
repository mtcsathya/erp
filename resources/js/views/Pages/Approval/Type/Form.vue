<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ApprovalType"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('approval.type.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('approval.type.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.department"
          name="department"
          :label="$trans('approval.type.props.department')"
          v-model:error="formErrors.department"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.priority"
          name="priority"
          :label="$trans('approval.type.props.priority')"
          v-model:error="formErrors.priority"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.event"
          name="event"
          :label="$trans('approval.type.props.event')"
          v-model:error="formErrors.event"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.levels"
          name="levels"
          :label="$trans('approval.type.props.levels')"
          v-model:error="formErrors.levels"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isActive"
          name="isActive"
          :label="$trans('approval.type.props.isActive')"
          v-model:error="formErrors.isActive"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('approval.type.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'approval/type/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    category: '',
    department: '',
    priority: '',
    event: '',
    levels: '',
    isActive: false,
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
