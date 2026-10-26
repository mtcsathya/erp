<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="SiteBlock"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('site.block.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('site.block.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('site.block.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subTitle"
          name="subTitle"
          :label="$trans('site.block.props.subTitle')"
          v-model:error="formErrors.subTitle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.backgroundColor"
          name="backgroundColor"
          :label="$trans('site.block.props.backgroundColor')"
          v-model:error="formErrors.backgroundColor"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.textColor"
          name="textColor"
          :label="$trans('site.block.props.textColor')"
          v-model:error="formErrors.textColor"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.content"
          name="content"
          :label="$trans('site.block.props.content')"
          v-model:error="formErrors.content"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.menu"
          name="menu"
          :label="$trans('site.block.props.menu')"
          v-model:error="formErrors.menu"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.url"
          name="url"
          :label="$trans('site.block.props.url')"
          v-model:error="formErrors.url"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'site/block/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    type: '',
    title: '',
    subTitle: '',
    backgroundColor: '',
    textColor: '',
    content: '',
    menu: '',
    url: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
