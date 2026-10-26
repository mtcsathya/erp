<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="Exam"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('exam.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('exam.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.term"
          name="term"
          :label="$trans('exam.props.term')"
          v-model:error="formErrors.term"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.displayName"
          name="displayName"
          :label="$trans('exam.props.displayName')"
          v-model:error="formErrors.displayName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.weightage"
          name="weightage"
          :label="$trans('exam.props.weightage')"
          v-model:error="formErrors.weightage"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('exam.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'exam/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    code: '',
    term: '',
    displayName: '',
    weightage: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
