<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentGuardian"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('student.guardian.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.guardian"
          name="guardian"
          :label="$trans('student.guardian.props.guardian')"
          v-model:error="formErrors.guardian"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('student.guardian.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.relation"
          name="relation"
          :label="$trans('student.guardian.props.relation')"
          v-model:error="formErrors.relation"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.contactNumber"
          name="contactNumber"
          :label="$trans('student.guardian.props.contactNumber')"
          v-model:error="formErrors.contactNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.createUserAccount"
          name="createUserAccount"
          :label="$trans('student.guardian.props.createUserAccount')"
          v-model:error="formErrors.createUserAccount"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('student.guardian.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.username"
          name="username"
          :label="$trans('student.guardian.props.username')"
          v-model:error="formErrors.username"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.password"
          name="password"
          :label="$trans('student.guardian.props.password')"
          v-model:error="formErrors.password"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.passwordConfirmation"
          name="passwordConfirmation"
          :label="$trans('student.guardian.props.passwordConfirmation')"
          v-model:error="formErrors.passwordConfirmation"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/guardian/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    guardian: '',
    name: '',
    relation: '',
    contactNumber: '',
    createUserAccount: false,
    email: '',
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
