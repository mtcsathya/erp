<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="DisciplineIncident"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('discipline.incident.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('discipline.incident.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('discipline.incident.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.nature"
          name="nature"
          :label="$trans('discipline.incident.props.nature')"
          v-model:error="formErrors.nature"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.severity"
          name="severity"
          :label="$trans('discipline.incident.props.severity')"
          v-model:error="formErrors.severity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.reportedBy"
          name="reportedBy"
          :label="$trans('discipline.incident.props.reportedBy')"
          v-model:error="formErrors.reportedBy"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('discipline.incident.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('discipline.incident.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.action"
          name="action"
          :label="$trans('discipline.incident.props.action')"
          v-model:error="formErrors.action"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'discipline/incident/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    category: '',
    title: '',
    date: '',
    nature: '',
    severity: '',
    reportedBy: '',
    student: '',
    description: '',
    action: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
