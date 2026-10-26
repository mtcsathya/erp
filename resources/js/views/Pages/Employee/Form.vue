<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="Employee"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.department"
          name="department"
          :label="$trans('employee.props.department')"
          v-model:error="formErrors.department"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.designation"
          name="designation"
          :label="$trans('employee.props.designation')"
          v-model:error="formErrors.designation"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employmentStatus"
          name="employmentStatus"
          :label="$trans('employee.props.employmentStatus')"
          v-model:error="formErrors.employmentStatus"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.joiningDate"
          name="joiningDate"
          :label="$trans('employee.props.joiningDate')"
          v-model:error="formErrors.joiningDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.codeNumber"
          name="codeNumber"
          :label="$trans('employee.props.codeNumber')"
          v-model:error="formErrors.codeNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employeeType"
          name="employeeType"
          :label="$trans('employee.props.employeeType')"
          v-model:error="formErrors.employeeType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.firstName"
          name="firstName"
          :label="$trans('employee.props.firstName')"
          v-model:error="formErrors.firstName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.middleName"
          name="middleName"
          :label="$trans('employee.props.middleName')"
          v-model:error="formErrors.middleName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.thirdName"
          name="thirdName"
          :label="$trans('employee.props.thirdName')"
          v-model:error="formErrors.thirdName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.lastName"
          name="lastName"
          :label="$trans('employee.props.lastName')"
          v-model:error="formErrors.lastName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.birthDate"
          name="birthDate"
          :label="$trans('employee.props.birthDate')"
          v-model:error="formErrors.birthDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.gender"
          name="gender"
          :label="$trans('employee.props.gender')"
          v-model:error="formErrors.gender"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('employee.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('employee.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.roles"
          name="roles"
          :label="$trans('employee.props.roles')"
          v-model:error="formErrors.roles"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.createUserAccount"
          name="createUserAccount"
          :label="$trans('employee.props.createUserAccount')"
          v-model:error="formErrors.createUserAccount"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.username"
          name="username"
          :label="$trans('employee.props.username')"
          v-model:error="formErrors.username"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.password"
          name="password"
          :label="$trans('employee.props.password')"
          v-model:error="formErrors.password"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.passwordConfirmation"
          name="passwordConfirmation"
          :label="$trans('employee.props.passwordConfirmation')"
          v-model:error="formErrors.passwordConfirmation"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    department: '',
    designation: '',
    employmentStatus: '',
    joiningDate: '',
    codeNumber: '',
    employeeType: '',
    firstName: '',
    middleName: '',
    thirdName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    contactNumber: '',
    email: '',
    roles: '',
    createUserAccount: false,
    username: '',
    password: '',
    passwordConfirmation: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
