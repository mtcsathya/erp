<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="User"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('user.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.roles"
          name="roles"
          :label="$trans('user.props.roles')"
          v-model:error="formErrors.roles"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.email"
          name="email"
          :label="$trans('user.props.email')"
          v-model:error="formErrors.email"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.username"
          name="username"
          :label="$trans('user.props.username')"
          v-model:error="formErrors.username"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.password"
          name="password"
          :label="$trans('user.props.password')"
          v-model:error="formErrors.password"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.passwordConfirmation"
          name="passwordConfirmation"
          :label="$trans('user.props.passwordConfirmation')"
          v-model:error="formErrors.passwordConfirmation"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.forceChangePassword"
          name="forceChangePassword"
          :label="$trans('user.props.forceChangePassword')"
          v-model:error="formErrors.forceChangePassword"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'user/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    roles: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    forceChangePassword: false,
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
