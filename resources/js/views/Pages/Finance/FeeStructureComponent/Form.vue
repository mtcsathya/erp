<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceFeeStructureComponent"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.feeStructure"
          name="feeStructure"
          :label="$trans('finance.fee_structure_component.props.feeStructure')"
          v-model:error="formErrors.feeStructure"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.feeHead"
          name="feeHead"
          :label="$trans('finance.fee_structure_component.props.feeHead')"
          v-model:error="formErrors.feeHead"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.components"
          name="components"
          :label="$trans('finance.fee_structure_component.props.components')"
          v-model:error="formErrors.components"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'finance/feeStructureComponent/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    feeStructure: '',
    feeHead: '',
    components: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
