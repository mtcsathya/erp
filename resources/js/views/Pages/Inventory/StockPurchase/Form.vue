<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="InventoryStockPurchase"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasItems"
          name="hasItems"
          :label="$trans('inventory.stock_purchase.props.hasItems')"
          v-model:error="formErrors.hasItems"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.vendor"
          name="vendor"
          :label="$trans('inventory.stock_purchase.props.vendor')"
          v-model:error="formErrors.vendor"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('inventory.stock_purchase.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.voucherNumber"
          name="voucherNumber"
          :label="$trans('inventory.stock_purchase.props.voucherNumber')"
          v-model:error="formErrors.voucherNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.place"
          name="place"
          :label="$trans('inventory.stock_purchase.props.place')"
          v-model:error="formErrors.place"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.items"
          name="items"
          :label="$trans('inventory.stock_purchase.props.items')"
          v-model:error="formErrors.items"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('inventory.stock_purchase.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'inventory/stockPurchase/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    hasItems: false,
    vendor: '',
    date: '',
    voucherNumber: '',
    place: '',
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
