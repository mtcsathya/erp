<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="AcademicEnrollmentSeat"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.course"
          name="course"
          :label="$trans('academic.enrollment_seat.props.course')"
          v-model:error="formErrors.course"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.enrollmentType"
          name="enrollmentType"
          :label="$trans('academic.enrollment_seat.props.enrollmentType')"
          v-model:error="formErrors.enrollmentType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maxSeat"
          name="maxSeat"
          :label="$trans('academic.enrollment_seat.props.maxSeat')"
          v-model:error="formErrors.maxSeat"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('academic.enrollment_seat.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'academic/enrollmentSeat/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    course: '',
    enrollmentType: '',
    maxSeat: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
