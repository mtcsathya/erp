<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="InventoryStockTransfer"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('inventory.stock_transfer.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.fromPlace"
          name="fromPlace"
          :label="$trans('inventory.stock_transfer.props.fromPlace')"
          v-model:error="formErrors.fromPlace"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.toPlace"
          name="toPlace"
          :label="$trans('inventory.stock_transfer.props.toPlace')"
          v-model:error="formErrors.toPlace"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.items"
          name="items"
          :label="$trans('inventory.stock_transfer.props.items')"
          v-model:error="formErrors.items"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('inventory.stock_transfer.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'inventory/stockTransfer/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    date: '',
    fromPlace: '',
    toPlace: '',
    items: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
