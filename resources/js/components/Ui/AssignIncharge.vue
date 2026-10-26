<template>
  <BaseCard>
    <template #title>{{ $trans('employee.incharge.assign_incharge') }}</template>
    <div class="space-y-4">
      <BaseSelect v-model="form.employee" name="employee"
        :label="$trans('employee.employee')" :options="employees"
        label-prop="name" value-prop="uuid" />
      <BaseInput type="date" v-model="form.startDate" name="startDate"
        :label="$trans('general.start_date')" />
      <BaseInput type="date" v-model="form.endDate" name="endDate"
        :label="$trans('general.end_date')" />
      <BaseTextarea v-model="form.remarks" name="remarks"
        :label="$trans('general.remarks')" />
      <BaseButton @click="$emit('submit', form)">{{ $trans('global.save') }}</BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
import { reactive } from 'vue';

defineProps({
    employees: { type: Array, default: () => [] },
});

defineEmits(['submit']);

const form = reactive({ employee: '', startDate: '', endDate: '', remarks: '' });
</script>
