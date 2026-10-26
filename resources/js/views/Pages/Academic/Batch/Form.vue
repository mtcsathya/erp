<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="AcademicBatch"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('academic.batch.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.course"
          name="course"
          :label="$trans('academic.batch.props.course')"
          v-model:error="formErrors.course"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maxStrength"
          name="maxStrength"
          :label="$trans('academic.batch.props.maxStrength')"
          v-model:error="formErrors.maxStrength"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.rollNumberPrefix"
          name="rollNumberPrefix"
          :label="$trans('academic.batch.props.rollNumberPrefix')"
          v-model:error="formErrors.rollNumberPrefix"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.position"
          name="position"
          :label="$trans('academic.batch.props.position')"
          v-model:error="formErrors.position"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.pgAccount"
          name="pgAccount"
          :label="$trans('academic.batch.props.pgAccount')"
          v-model:error="formErrors.pgAccount"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('academic.batch.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'academic/batch/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    course: '',
    maxStrength: '',
    rollNumberPrefix: '',
    position: '',
    pgAccount: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
