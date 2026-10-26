<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="LibraryTransaction"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.to"
          name="to"
          :label="$trans('library.transaction.props.to')"
          v-model:error="formErrors.to"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.requester"
          name="requester"
          :label="$trans('library.transaction.props.requester')"
          v-model:error="formErrors.requester"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.issueDate"
          name="issueDate"
          :label="$trans('library.transaction.props.issueDate')"
          v-model:error="formErrors.issueDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.dueDate"
          name="dueDate"
          :label="$trans('library.transaction.props.dueDate')"
          v-model:error="formErrors.dueDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.records"
          name="records"
          :label="$trans('library.transaction.props.records')"
          v-model:error="formErrors.records"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('library.transaction.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'library/transaction/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    to: '',
    requester: '',
    issueDate: false,
    dueDate: '',
    records: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
