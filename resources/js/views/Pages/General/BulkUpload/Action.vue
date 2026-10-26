<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('general.general'), path: 'General' },
      { label: $trans('general.bulk_upload.bulk_upload'), path: 'GeneralBulkUploadList' },
    ]"
  >
    <PageHeaderAction name="GeneralBulkUpload" :title="$trans('general.bulk_upload.bulk_upload')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      redirect="GeneralBulkUpload"
    >
      <div class="grid grid-cols-3 gap-6">
        <!-- TODO: Add form fields from beautified source -->
        <div class="col-span-3">
          <BaseInput type="text" v-model="form.name" name="name" :label="$trans('general.bulk_upload.props.name')" />
        </div>
      </div>
    </FormAction>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const initUrl = 'general/bulkUpload/';
const initForm = { name: '' };
const form = reactive({ ...initForm });
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
