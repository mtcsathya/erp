<template>
  <div class="space-y-4">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-3 sm:col-span-1">
        <BaseSelect v-model="form.studentAudienceType" name="studentAudienceType"
          :label="$trans('communication.props.student_audience_type')"
          :options="audienceTypes" label-prop="label" value-prop="value" />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseSelect v-model="form.employeeAudienceType" name="employeeAudienceType"
          :label="$trans('communication.props.employee_audience_type')"
          :options="audienceTypes" label-prop="label" value-prop="value" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    form: { type: Object, required: true },
    audienceTypes: { type: Array, default: () => [
        { label: 'All', value: 'all' },
        { label: 'Selected', value: 'selected' },
        { label: 'None', value: 'none' },
    ]},
});
</script>
