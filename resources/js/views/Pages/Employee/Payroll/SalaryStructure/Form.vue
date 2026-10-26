<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="EmployeePayrollSalaryStructure"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.employee"
          name="employee"
          :label="$trans('employee.payroll.salary_structure.props.employee')"
          v-model:error="formErrors.employee"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.salaryTemplate"
          name="salaryTemplate"
          :label="$trans('employee.payroll.salary_structure.props.salaryTemplate')"
          v-model:error="formErrors.salaryTemplate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.effectiveDate"
          name="effectiveDate"
          :label="$trans('employee.payroll.salary_structure.props.effectiveDate')"
          v-model:error="formErrors.effectiveDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.hourlyPay"
          name="hourlyPay"
          :label="$trans('employee.payroll.salary_structure.props.hourlyPay')"
          v-model:error="formErrors.hourlyPay"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.records"
          name="records"
          :label="$trans('employee.payroll.salary_structure.props.records')"
          v-model:error="formErrors.records"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('employee.payroll.salary_structure.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'employee/payroll/salaryStructure/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    employee: '',
    salaryTemplate: '',
    effectiveDate: '',
    hourlyPay: '',
    records: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
