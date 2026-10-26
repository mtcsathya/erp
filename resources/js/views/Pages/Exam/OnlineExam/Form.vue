<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ExamOnlineExam"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('exam.online_exam.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('exam.online_exam.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('exam.online_exam.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startTime"
          name="startTime"
          :label="$trans('exam.online_exam.props.startTime')"
          v-model:error="formErrors.startTime"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endDate"
          name="endDate"
          :label="$trans('exam.online_exam.props.endDate')"
          v-model:error="formErrors.endDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endTime"
          name="endTime"
          :label="$trans('exam.online_exam.props.endTime')"
          v-model:error="formErrors.endTime"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.batches"
          name="batches"
          :label="$trans('exam.online_exam.props.batches')"
          v-model:error="formErrors.batches"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('exam.online_exam.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.passPercentage"
          name="passPercentage"
          :label="$trans('exam.online_exam.props.passPercentage')"
          v-model:error="formErrors.passPercentage"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasNegativeMarking"
          name="hasNegativeMarking"
          :label="$trans('exam.online_exam.props.hasNegativeMarking')"
          v-model:error="formErrors.hasNegativeMarking"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.negativeMarkPercentPerQuestion"
          name="negativeMarkPercentPerQuestion"
          :label="$trans('exam.online_exam.props.negativeMarkPercentPerQuestion')"
          v-model:error="formErrors.negativeMarkPercentPerQuestion"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.instructions"
          name="instructions"
          :label="$trans('exam.online_exam.props.instructions')"
          v-model:error="formErrors.instructions"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('exam.online_exam.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'exam/onlineExam/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    type: '',
    date: '',
    startTime: '',
    endDate: '',
    endTime: '',
    batches: '',
    subject: '',
    passPercentage: '',
    hasNegativeMarking: false,
    negativeMarkPercentPerQuestion: '',
    instructions: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
