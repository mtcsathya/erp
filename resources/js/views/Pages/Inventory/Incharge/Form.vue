<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="InventoryIncharge"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.inventory"
          name="inventory"
          :label="$trans('inventory.incharge.props.inventory')"
          v-model:error="formErrors.inventory"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('inventory.incharge.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startDate"
          name="startDate"
          :label="$trans('inventory.incharge.props.startDate')"
          v-model:error="formErrors.startDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endDate"
          name="endDate"
          :label="$trans('inventory.incharge.props.endDate')"
          v-model:error="formErrors.endDate"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.remarks"
          name="remarks"
          :label="$trans('inventory.incharge.props.remarks')"
          v-model:error="formErrors.remarks"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'inventory/incharge/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    inventory: '',
    employee: '',
    startDate: '',
    endDate: '',
    remarks: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
