<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="Contact"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.firstName"
          name="firstName"
          :label="$trans('contact.props.firstName')"
          v-model:error="formErrors.firstName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.middleName"
          name="middleName"
          :label="$trans('contact.props.middleName')"
          v-model:error="formErrors.middleName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.thirdName"
          name="thirdName"
          :label="$trans('contact.props.thirdName')"
          v-model:error="formErrors.thirdName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.lastName"
          name="lastName"
          :label="$trans('contact.props.lastName')"
          v-model:error="formErrors.lastName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.gender"
          name="gender"
          :label="$trans('contact.props.gender')"
          v-model:error="formErrors.gender"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.birthDate"
          name="birthDate"
          :label="$trans('contact.props.birthDate')"
          v-model:error="formErrors.birthDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('contact.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('contact.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.fatherName"
          name="fatherName"
          :label="$trans('contact.props.fatherName')"
          v-model:error="formErrors.fatherName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.motherName"
          name="motherName"
          :label="$trans('contact.props.motherName')"
          v-model:error="formErrors.motherName"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'contact/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    firstName: '',
    middleName: '',
    thirdName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    contactNumber: '',
    email: '',
    fatherName: '',
    motherName: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
