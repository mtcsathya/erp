<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentAccounts"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.student"
          name="student"
          :label="$trans('student.accounts.props.student')"
          v-model:error="formErrors.student"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('student.accounts.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.alias"
          name="alias"
          :label="$trans('student.accounts.props.alias')"
          v-model:error="formErrors.alias"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.number"
          name="number"
          :label="$trans('student.accounts.props.number')"
          v-model:error="formErrors.number"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankName"
          name="bankName"
          :label="$trans('student.accounts.props.bankName')"
          v-model:error="formErrors.bankName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.branchName"
          name="branchName"
          :label="$trans('student.accounts.props.branchName')"
          v-model:error="formErrors.branchName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankCode1"
          name="bankCode1"
          :label="$trans('student.accounts.props.bankCode1')"
          v-model:error="formErrors.bankCode1"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankCode2"
          name="bankCode2"
          :label="$trans('student.accounts.props.bankCode2')"
          v-model:error="formErrors.bankCode2"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankCode3"
          name="bankCode3"
          :label="$trans('student.accounts.props.bankCode3')"
          v-model:error="formErrors.bankCode3"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/accounts/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    student: '',
    name: '',
    alias: '',
    number: '',
    bankName: '',
    branchName: '',
    bankCode1: '',
    bankCode2: '',
    bankCode3: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
