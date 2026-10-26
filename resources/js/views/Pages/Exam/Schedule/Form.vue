<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ExamSchedule"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.exam"
          name="exam"
          :label="$trans('exam.schedule.props.exam')"
          v-model:error="formErrors.exam"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.batch"
          name="batch"
          :label="$trans('exam.schedule.props.batch')"
          v-model:error="formErrors.batch"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isReassessment"
          name="isReassessment"
          :label="$trans('exam.schedule.props.isReassessment')"
          v-model:error="formErrors.isReassessment"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.grade"
          name="grade"
          :label="$trans('exam.schedule.props.grade')"
          v-model:error="formErrors.grade"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.assessment"
          name="assessment"
          :label="$trans('exam.schedule.props.assessment')"
          v-model:error="formErrors.assessment"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.observation"
          name="observation"
          :label="$trans('exam.schedule.props.observation')"
          v-model:error="formErrors.observation"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.competency"
          name="competency"
          :label="$trans('exam.schedule.props.competency')"
          v-model:error="formErrors.competency"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('exam.schedule.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.lastExamDate"
          name="lastExamDate"
          :label="$trans('exam.schedule.props.lastExamDate')"
          v-model:error="formErrors.lastExamDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.records"
          name="records"
          :label="$trans('exam.schedule.props.records')"
          v-model:error="formErrors.records"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.additionalSubjects"
          name="additionalSubjects"
          :label="$trans('exam.schedule.props.additionalSubjects')"
          v-model:error="formErrors.additionalSubjects"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'exam/schedule/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    exam: '',
    batch: '',
    isReassessment: false,
    grade: '',
    assessment: '',
    observation: '',
    competency: '',
    description: '',
    lastExamDate: '',
    records: '',
    additionalSubjects: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
