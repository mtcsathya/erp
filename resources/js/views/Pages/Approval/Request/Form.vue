<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ApprovalRequest"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('approval.request.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('approval.request.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.priority"
          name="priority"
          :label="$trans('approval.request.props.priority')"
          v-model:error="formErrors.priority"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.nature"
          name="nature"
          :label="$trans('approval.request.props.nature')"
          v-model:error="formErrors.nature"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.group"
          name="group"
          :label="$trans('approval.request.props.group')"
          v-model:error="formErrors.group"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.dueDate"
          name="dueDate"
          :label="$trans('approval.request.props.dueDate')"
          v-model:error="formErrors.dueDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vendors"
          name="vendors"
          :label="$trans('approval.request.props.vendors')"
          v-model:error="formErrors.vendors"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contact"
          name="contact"
          :label="$trans('approval.request.props.contact')"
          v-model:error="formErrors.contact"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('approval.request.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('approval.request.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('approval.request.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'approval/request/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    type: '',
    priority: '',
    nature: '',
    group: '',
    dueDate: '',
    vendors: '',
    contact: '',
    name: '',
    contactNumber: '',
    email: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
