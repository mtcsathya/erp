<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentRegistration"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.period"
          name="period"
          :label="$trans('student.registration.props.period')"
          v-model:error="formErrors.period"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.course"
          name="course"
          :label="$trans('student.registration.props.course')"
          v-model:error="formErrors.course"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('student.registration.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.enrollmentType"
          name="enrollmentType"
          :label="$trans('student.registration.props.enrollmentType')"
          v-model:error="formErrors.enrollmentType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.studentType"
          name="studentType"
          :label="$trans('student.registration.props.studentType')"
          v-model:error="formErrors.studentType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('student.registration.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.firstName"
          name="firstName"
          :label="$trans('student.registration.props.firstName')"
          v-model:error="formErrors.firstName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.middleName"
          name="middleName"
          :label="$trans('student.registration.props.middleName')"
          v-model:error="formErrors.middleName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.thirdName"
          name="thirdName"
          :label="$trans('student.registration.props.thirdName')"
          v-model:error="formErrors.thirdName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.lastName"
          name="lastName"
          :label="$trans('student.registration.props.lastName')"
          v-model:error="formErrors.lastName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.birthDate"
          name="birthDate"
          :label="$trans('student.registration.props.birthDate')"
          v-model:error="formErrors.birthDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.gender"
          name="gender"
          :label="$trans('student.registration.props.gender')"
          v-model:error="formErrors.gender"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('student.registration.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.registrationFee"
          name="registrationFee"
          :label="$trans('student.registration.props.registrationFee')"
          v-model:error="formErrors.registrationFee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.paymentDueDate"
          name="paymentDueDate"
          :label="$trans('student.registration.props.paymentDueDate')"
          v-model:error="formErrors.paymentDueDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.guardians"
          name="guardians"
          :label="$trans('student.registration.props.guardians')"
          v-model:error="formErrors.guardians"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.customFields"
          name="customFields"
          :label="$trans('student.registration.props.customFields')"
          v-model:error="formErrors.customFields"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/registration/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    period: '',
    course: '',
    date: '',
    enrollmentType: '',
    studentType: '',
    student: '',
    firstName: '',
    middleName: '',
    thirdName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    contactNumber: '',
    registrationFee: '',
    paymentDueDate: '',
    guardians: '',
    customFields: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
