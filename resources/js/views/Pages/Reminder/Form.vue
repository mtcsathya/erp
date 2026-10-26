<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="Reminder"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('reminder.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('reminder.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.notifyBefore"
          name="notifyBefore"
          :label="$trans('reminder.props.notifyBefore')"
          v-model:error="formErrors.notifyBefore"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.users"
          name="users"
          :label="$trans('reminder.props.users')"
          v-model:error="formErrors.users"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.note"
          name="note"
          :label="$trans('reminder.props.note')"
          v-model:error="formErrors.note"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reminder/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    date: '',
    notifyBefore: '',
    users: '',
    note: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
