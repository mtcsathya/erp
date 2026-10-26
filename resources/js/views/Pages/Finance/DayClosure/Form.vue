<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceDayClosure"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('finance.day_closure.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.denominations"
          name="denominations"
          :label="$trans('finance.day_closure.props.denominations')"
          v-model:error="formErrors.denominations"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('finance.day_closure.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.total"
          name="total"
          :label="$trans('finance.day_closure.props.total')"
          v-model:error="formErrors.total"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.reason"
          name="reason"
          :label="$trans('finance.day_closure.props.reason')"
          v-model:error="formErrors.reason"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/dayClosure/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    date: '',
    denominations: '',
    remarks: '',
    total: '',
    reason: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
