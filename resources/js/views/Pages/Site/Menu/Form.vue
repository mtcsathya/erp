<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="SiteMenu"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.name"
          name="name"
          :label="$trans('site.menu.props.name')"
          v-model:error="formErrors.name"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.hasExternalUrl"
          name="hasExternalUrl"
          :label="$trans('site.menu.props.hasExternalUrl')"
          v-model:error="formErrors.hasExternalUrl"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.externalUrl"
          name="externalUrl"
          :label="$trans('site.menu.props.externalUrl')"
          v-model:error="formErrors.externalUrl"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.placement"
          name="placement"
          :label="$trans('site.menu.props.placement')"
          v-model:error="formErrors.placement"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.parent"
          name="parent"
          :label="$trans('site.menu.props.parent')"
          v-model:error="formErrors.parent"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.page"
          name="page"
          :label="$trans('site.menu.props.page')"
          v-model:error="formErrors.page"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'site/menu/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    name: '',
    hasExternalUrl: false,
    externalUrl: '',
    placement: '',
    parent: '',
    page: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
