<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="HelpdeskTicket"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('helpdesk.ticket.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('helpdesk.ticket.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.priority"
          name="priority"
          :label="$trans('helpdesk.ticket.props.priority')"
          v-model:error="formErrors.priority"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startDate"
          name="startDate"
          :label="$trans('helpdesk.ticket.props.startDate')"
          v-model:error="formErrors.startDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.dueDate"
          name="dueDate"
          :label="$trans('helpdesk.ticket.props.dueDate')"
          v-model:error="formErrors.dueDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.dueTime"
          name="dueTime"
          :label="$trans('helpdesk.ticket.props.dueTime')"
          v-model:error="formErrors.dueTime"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('helpdesk.ticket.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.customFields"
          name="customFields"
          :label="$trans('helpdesk.ticket.props.customFields')"
          v-model:error="formErrors.customFields"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'helpdesk/ticket/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    category: '',
    priority: '',
    startDate: '',
    dueDate: '',
    dueTime: '',
    description: '',
    customFields: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
