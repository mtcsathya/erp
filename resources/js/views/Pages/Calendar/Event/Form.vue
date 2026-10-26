<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="CalendarEvent"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('calendar.event.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('calendar.event.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startDate"
          name="startDate"
          :label="$trans('calendar.event.props.startDate')"
          v-model:error="formErrors.startDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.startTime"
          name="startTime"
          :label="$trans('calendar.event.props.startTime')"
          v-model:error="formErrors.startTime"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endDate"
          name="endDate"
          :label="$trans('calendar.event.props.endDate')"
          v-model:error="formErrors.endDate"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.endTime"
          name="endTime"
          :label="$trans('calendar.event.props.endTime')"
          v-model:error="formErrors.endTime"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.incharge"
          name="incharge"
          :label="$trans('calendar.event.props.incharge')"
          v-model:error="formErrors.incharge"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isPublic"
          name="isPublic"
          :label="$trans('calendar.event.props.isPublic')"
          v-model:error="formErrors.isPublic"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.venue"
          name="venue"
          :label="$trans('calendar.event.props.venue')"
          v-model:error="formErrors.venue"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('calendar.event.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'calendar/event/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    incharge: '',
    isPublic: false,
    venue: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
