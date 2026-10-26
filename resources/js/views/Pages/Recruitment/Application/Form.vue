<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="RecruitmentApplication"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.designation"
          name="designation"
          :label="$trans('recruitment.application.props.designation')"
          v-model:error="formErrors.designation"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.firstName"
          name="firstName"
          :label="$trans('recruitment.application.props.firstName')"
          v-model:error="formErrors.firstName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.middleName"
          name="middleName"
          :label="$trans('recruitment.application.props.middleName')"
          v-model:error="formErrors.middleName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.thirdName"
          name="thirdName"
          :label="$trans('recruitment.application.props.thirdName')"
          v-model:error="formErrors.thirdName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.lastName"
          name="lastName"
          :label="$trans('recruitment.application.props.lastName')"
          v-model:error="formErrors.lastName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.gender"
          name="gender"
          :label="$trans('recruitment.application.props.gender')"
          v-model:error="formErrors.gender"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.birthDate"
          name="birthDate"
          :label="$trans('recruitment.application.props.birthDate')"
          v-model:error="formErrors.birthDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('recruitment.application.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('recruitment.application.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.fatherName"
          name="fatherName"
          :label="$trans('recruitment.application.props.fatherName')"
          v-model:error="formErrors.fatherName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.motherName"
          name="motherName"
          :label="$trans('recruitment.application.props.motherName')"
          v-model:error="formErrors.motherName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.applicationDate"
          name="applicationDate"
          :label="$trans('recruitment.application.props.applicationDate')"
          v-model:error="formErrors.applicationDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.availabilityDate"
          name="availabilityDate"
          :label="$trans('recruitment.application.props.availabilityDate')"
          v-model:error="formErrors.availabilityDate"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.qualificationSummary"
          name="qualificationSummary"
          :label="$trans('recruitment.application.props.qualificationSummary')"
          v-model:error="formErrors.qualificationSummary"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.maritalStatus"
          name="maritalStatus"
          :label="$trans('recruitment.application.props.maritalStatus')"
          v-model:error="formErrors.maritalStatus"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bloodGroup"
          name="bloodGroup"
          :label="$trans('recruitment.application.props.bloodGroup')"
          v-model:error="formErrors.bloodGroup"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('recruitment.application.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.caste"
          name="caste"
          :label="$trans('recruitment.application.props.caste')"
          v-model:error="formErrors.caste"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.religion"
          name="religion"
          :label="$trans('recruitment.application.props.religion')"
          v-model:error="formErrors.religion"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('recruitment.application.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('recruitment.application.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'recruitment/application/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    designation: '',
    firstName: '',
    middleName: '',
    thirdName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    email: '',
    contactNumber: '',
    fatherName: '',
    motherName: '',
    applicationDate: '',
    availabilityDate: '',
    qualificationSummary: '',
    maritalStatus: '',
    bloodGroup: '',
    category: '',
    caste: '',
    religion: '',
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
