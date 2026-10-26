<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceTax"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasComponents"
          name="hasComponents"
          :label="$trans('finance.tax.props.hasComponents')"
          v-model:error="formErrors.hasComponents"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('finance.tax.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('finance.tax.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.rate"
          name="rate"
          :label="$trans('finance.tax.props.rate')"
          v-model:error="formErrors.rate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.components"
          name="components"
          :label="$trans('finance.tax.props.components')"
          v-model:error="formErrors.components"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('finance.tax.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/tax/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    hasComponents: false,
    name: '',
    code: '',
    rate: '',
    components: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
