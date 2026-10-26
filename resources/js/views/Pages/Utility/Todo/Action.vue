<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('utility.utility'), path: 'Utility' },
      { label: $trans('utility.todo.todo'), path: 'UtilityTodoList' },
    ]"
  >
    <PageHeaderAction name="UtilityTodo" :title="$trans('utility.todo.todo')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      redirect="UtilityTodo"
    >
      <div class="grid grid-cols-3 gap-6">
        <!-- TODO: Add form fields from beautified source -->
        <div class="col-span-3">
          <BaseInput type="text" v-model="form.name" name="name" :label="$trans('utility.todo.props.name')" />
        </div>
      </div>
    </FormAction>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const initUrl = 'utility/todo/';
const initForm = { name: '' };
const form = reactive({ ...initForm });
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
