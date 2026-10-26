<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="News"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('news.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subTitle"
          name="subTitle"
          :label="$trans('news.props.subTitle')"
          v-model:error="formErrors.subTitle"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.content"
          name="content"
          :label="$trans('news.props.content')"
          v-model:error="formErrors.content"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'news/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    subTitle: '',
    content: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
