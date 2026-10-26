<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="EmployeeAccounts"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('employee.accounts.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('employee.accounts.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.alias"
          name="alias"
          :label="$trans('employee.accounts.props.alias')"
          v-model:error="formErrors.alias"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.number"
          name="number"
          :label="$trans('employee.accounts.props.number')"
          v-model:error="formErrors.number"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankName"
          name="bankName"
          :label="$trans('employee.accounts.props.bankName')"
          v-model:error="formErrors.bankName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.branchName"
          name="branchName"
          :label="$trans('employee.accounts.props.branchName')"
          v-model:error="formErrors.branchName"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankCode1"
          name="bankCode1"
          :label="$trans('employee.accounts.props.bankCode1')"
          v-model:error="formErrors.bankCode1"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankCode2"
          name="bankCode2"
          :label="$trans('employee.accounts.props.bankCode2')"
          v-model:error="formErrors.bankCode2"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.bankCode3"
          name="bankCode3"
          :label="$trans('employee.accounts.props.bankCode3')"
          v-model:error="formErrors.bankCode3"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/accounts/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    employee: '',
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
