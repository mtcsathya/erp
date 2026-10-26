<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="InventoryStockRequisition"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vendor"
          name="vendor"
          :label="$trans('inventory.stock_requisition.props.vendor')"
          v-model:error="formErrors.vendor"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('inventory.stock_requisition.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.place"
          name="place"
          :label="$trans('inventory.stock_requisition.props.place')"
          v-model:error="formErrors.place"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.items"
          name="items"
          :label="$trans('inventory.stock_requisition.props.items')"
          v-model:error="formErrors.items"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('inventory.stock_requisition.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.messageToVendor"
          name="messageToVendor"
          :label="$trans('inventory.stock_requisition.props.messageToVendor')"
          v-model:error="formErrors.messageToVendor"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'inventory/stockRequisition/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    vendor: '',
    date: '',
    place: '',
    items: '',
    description: '',
    messageToVendor: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
