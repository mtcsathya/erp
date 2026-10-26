<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="LibraryBook"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.title"
          name="title"
          :label="$trans('library.book.props.title')"
          v-model:error="formErrors.title"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subTitle"
          name="subTitle"
          :label="$trans('library.book.props.subTitle')"
          v-model:error="formErrors.subTitle"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.author"
          name="author"
          :label="$trans('library.book.props.author')"
          v-model:error="formErrors.author"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.publisher"
          name="publisher"
          :label="$trans('library.book.props.publisher')"
          v-model:error="formErrors.publisher"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.language"
          name="language"
          :label="$trans('library.book.props.language')"
          v-model:error="formErrors.language"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.topic"
          name="topic"
          :label="$trans('library.book.props.topic')"
          v-model:error="formErrors.topic"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.category"
          name="category"
          :label="$trans('library.book.props.category')"
          v-model:error="formErrors.category"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.subject"
          name="subject"
          :label="$trans('library.book.props.subject')"
          v-model:error="formErrors.subject"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.yearPublished"
          name="yearPublished"
          :label="$trans('library.book.props.yearPublished')"
          v-model:error="formErrors.yearPublished"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.volume"
          name="volume"
          :label="$trans('library.book.props.volume')"
          v-model:error="formErrors.volume"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseCheckbox
          v-model="form.isbnNumber"
          name="isbnNumber"
          :label="$trans('library.book.props.isbnNumber')"
          v-model:error="formErrors.isbnNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.callNumber"
          name="callNumber"
          :label="$trans('library.book.props.callNumber')"
          v-model:error="formErrors.callNumber"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.edition"
          name="edition"
          :label="$trans('library.book.props.edition')"
          v-model:error="formErrors.edition"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.page"
          name="page"
          :label="$trans('library.book.props.page')"
          v-model:error="formErrors.page"
        />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput
          type="text"
          v-model="form.price"
          name="price"
          :label="$trans('library.book.props.price')"
          v-model:error="formErrors.price"
        />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = 'library/book/';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
    title: '',
    subTitle: '',
    author: '',
    publisher: '',
    language: '',
    topic: '',
    category: '',
    subject: '',
    yearPublished: '',
    volume: '',
    isbnNumber: false,
    callNumber: '',
    edition: '',
    page: '',
    price: '',
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
