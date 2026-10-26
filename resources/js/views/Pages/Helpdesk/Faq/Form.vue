<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="HelpdeskFaq"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.question"
          name="question"
          :label="$trans('helpdesk.faq.props.question')"
          v-model:error="formErrors.question"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('helpdesk.faq.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isPublished"
          name="isPublished"
          :label="$trans('helpdesk.faq.props.isPublished')"
          v-model:error="formErrors.isPublished"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.answer"
          name="answer"
          :label="$trans('helpdesk.faq.props.answer')"
          v-model:error="formErrors.answer"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.tags"
          name="tags"
          :label="$trans('helpdesk.faq.props.tags')"
          v-model:error="formErrors.tags"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'helpdesk/faq/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    question: '',
    category: '',
    isPublished: false,
    answer: '',
    tags: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
