<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('inventory.inventory'), path: 'Inventory' },
      { label: $trans('inventory.inventory'), path: 'InventoryList' },
    ]"
  >
    <PageHeaderAction name="Inventory" :title="$trans('inventory.inventory')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      redirect="Inventory"
    >
      <div class="grid grid-cols-3 gap-6">
        <!-- TODO: Add form fields from beautified source -->
        <div class="col-span-3">
          <BaseInput type="text" v-model="form.name" name="name" :label="$trans('inventory.props.name')" />
        </div>
      </div>
    </FormAction>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const initUrl = 'inventory/';
const initForm = { name: '' };
const form = reactive({ ...initForm });
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
