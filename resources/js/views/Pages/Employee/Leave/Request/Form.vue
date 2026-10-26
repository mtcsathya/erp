<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="EmployeeLeaveRequest"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.leaveType"
          name="leaveType"
          :label="$trans('employee.leave.request.props.leaveType')"
          v-model:error="formErrors.leaveType"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startDate"
          name="startDate"
          :label="$trans('employee.leave.request.props.startDate')"
          v-model:error="formErrors.startDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endDate"
          name="endDate"
          :label="$trans('employee.leave.request.props.endDate')"
          v-model:error="formErrors.endDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isHalfDay"
          name="isHalfDay"
          :label="$trans('employee.leave.request.props.isHalfDay')"
          v-model:error="formErrors.isHalfDay"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.reason"
          name="reason"
          :label="$trans('employee.leave.request.props.reason')"
          v-model:error="formErrors.reason"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/leave/request/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    leaveType: '',
    startDate: '',
    endDate: '',
    isHalfDay: false,
    reason: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
