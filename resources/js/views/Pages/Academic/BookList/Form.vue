<template>
  <FormAction
    :pre-requisites="false"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="AcademicBookList"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.type"
          name="type"
          :label="$trans('academic.book_list.props.type')"
          v-model:error="formErrors.type"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.course"
          name="course"
          :label="$trans('academic.book_list.props.course')"
          v-model:error="formErrors.course"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('academic.book_list.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('academic.book_list.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.author"
          name="author"
          :label="$trans('academic.book_list.props.author')"
          v-model:error="formErrors.author"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.publisher"
          name="publisher"
          :label="$trans('academic.book_list.props.publisher')"
          v-model:error="formErrors.publisher"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.quantity"
          name="quantity"
          :label="$trans('academic.book_list.props.quantity')"
          v-model:error="formErrors.quantity"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.pages"
          name="pages"
          :label="$trans('academic.book_list.props.pages')"
          v-model:error="formErrors.pages"
        />
      </div>
      <div class="col-span-3">
        <BaseTextarea
          v-model="form.description"
          name="description"
          :label="$trans('academic.book_list.props.description')"
          v-model:error="formErrors.description"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'academic/bookList/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    type: '',
    course: '',
    subject: '',
    title: '',
    author: '',
    publisher: '',
    quantity: '',
    pages: '',
    description: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
