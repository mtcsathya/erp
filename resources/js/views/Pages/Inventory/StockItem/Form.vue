<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="InventoryStockItem"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('inventory.stock_item.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('inventory.stock_item.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.trackingType"
          name="trackingType"
          :label="$trans('inventory.stock_item.props.trackingType')"
          v-model:error="formErrors.trackingType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('inventory.stock_item.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.code"
          name="code"
          :label="$trans('inventory.stock_item.props.code')"
          v-model:error="formErrors.code"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.unit"
          name="unit"
          :label="$trans('inventory.stock_item.props.unit')"
          v-model:error="formErrors.unit"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isQuantityEditable"
          name="isQuantityEditable"
          :label="$trans('inventory.stock_item.props.isQuantityEditable')"
          v-model:error="formErrors.isQuantityEditable"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.place"
          name="place"
          :label="$trans('inventory.stock_item.props.place')"
          v-model:error="formErrors.place"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.quantity"
          name="quantity"
          :label="$trans('inventory.stock_item.props.quantity')"
          v-model:error="formErrors.quantity"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('inventory.stock_item.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'inventory/stockItem/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    category: '',
    type: '',
    trackingType: '',
    name: '',
    code: '',
    unit: '',
    isQuantityEditable: false,
    place: '',
    quantity: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
