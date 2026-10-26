<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.push_message.push_message'), path: 'CommunicationPushMessageList' },
    ]"
  >
    <PageHeaderAction name="CommunicationPushMessage" :title="$trans('communication.push_message.push_message')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      redirect="CommunicationPushMessage"
    >
      <div class="grid grid-cols-3 gap-6">
        <!-- TODO: Add form fields from beautified source -->
        <div class="col-span-3">
          <BaseInput type="text" v-model="form.name" name="name" :label="$trans('communication.push_message.props.name')" />
        </div>
      </div>
    </FormAction>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const initUrl = 'communication/pushMessage/';
const initForm = { name: '' };
const form = reactive({ ...initForm });
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
