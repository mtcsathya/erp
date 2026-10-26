<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="ReceptionCorrespondence"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('reception.correspondence.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.mode"
          name="mode"
          :label="$trans('reception.correspondence.props.mode')"
          v-model:error="formErrors.mode"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.letterNumber"
          name="letterNumber"
          :label="$trans('reception.correspondence.props.letterNumber')"
          v-model:error="formErrors.letterNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.senderTitle"
          name="senderTitle"
          :label="$trans('reception.correspondence.props.senderTitle')"
          v-model:error="formErrors.senderTitle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.senderAddress"
          name="senderAddress"
          :label="$trans('reception.correspondence.props.senderAddress')"
          v-model:error="formErrors.senderAddress"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.receiverTitle"
          name="receiverTitle"
          :label="$trans('reception.correspondence.props.receiverTitle')"
          v-model:error="formErrors.receiverTitle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.receiverAddress"
          name="receiverAddress"
          :label="$trans('reception.correspondence.props.receiverAddress')"
          v-model:error="formErrors.receiverAddress"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('reception.correspondence.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('reception.correspondence.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'reception/correspondence/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    mode: '',
    letterNumber: '',
    senderTitle: '',
    senderAddress: '',
    receiverTitle: '',
    receiverAddress: '',
    date: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
