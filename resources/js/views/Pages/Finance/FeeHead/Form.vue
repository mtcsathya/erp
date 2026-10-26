<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceFeeHead"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('finance.fee_head.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.feeGroup"
          name="feeGroup"
          :label="$trans('finance.fee_head.props.feeGroup')"
          v-model:error="formErrors.feeGroup"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('finance.fee_head.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('finance.fee_head.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.shortcode"
          name="shortcode"
          :label="$trans('finance.fee_head.props.shortcode')"
          v-model:error="formErrors.shortcode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasComponents"
          name="hasComponents"
          :label="$trans('finance.fee_head.props.hasComponents')"
          v-model:error="formErrors.hasComponents"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.tax"
          name="tax"
          :label="$trans('finance.fee_head.props.tax')"
          v-model:error="formErrors.tax"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.taxType"
          name="taxType"
          :label="$trans('finance.fee_head.props.taxType')"
          v-model:error="formErrors.taxType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.hsnCode"
          name="hsnCode"
          :label="$trans('finance.fee_head.props.hsnCode')"
          v-model:error="formErrors.hsnCode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.components"
          name="components"
          :label="$trans('finance.fee_head.props.components')"
          v-model:error="formErrors.components"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('finance.fee_head.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/feeHead/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    feeGroup: '',
    type: '',
    code: '',
    shortcode: '',
    hasComponents: false,
    tax: '',
    taxType: '',
    hsnCode: '',
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
