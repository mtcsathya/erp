<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="Gallery"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('gallery.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.date"
          name="date"
          :label="$trans('gallery.props.date')"
          v-model:error="formErrors.date"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('gallery.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isPublic"
          name="isPublic"
          :label="$trans('gallery.props.isPublic')"
          v-model:error="formErrors.isPublic"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.excerpt"
          name="excerpt"
          :label="$trans('gallery.props.excerpt')"
          v-model:error="formErrors.excerpt"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('gallery.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'gallery/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    date: '',
    type: '',
    isPublic: false,
    excerpt: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
