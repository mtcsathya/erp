<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="StudentCustomFee"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.feeHead"
          name="feeHead"
          :label="$trans('student.custom_fee.props.feeHead')"
          v-model:error="formErrors.feeHead"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.amount"
          name="amount"
          :label="$trans('student.custom_fee.props.amount')"
          v-model:error="formErrors.amount"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.dueDate"
          name="dueDate"
          :label="$trans('student.custom_fee.props.dueDate')"
          v-model:error="formErrors.dueDate"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('student.custom_fee.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'student/customFee/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    feeHead: '',
    amount: '',
    dueDate: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
