<template>
  <div class="dark:bg-dark-header rounded-lg bg-white p-4 shadow-sm">
    <div class="flex items-center justify-between mb-4">
      <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ $trans('global.filter') }}
      </h4>
      <button @click="$emit('hide')" class="text-gray-400 hover:text-gray-500">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <slot />
    <div class="mt-4 flex justify-end space-x-2">
      <BaseButton size="sm" design="secondary" @click="resetForm">
        {{ $trans('global.reset') }}
      </BaseButton>
      <BaseButton size="sm" @click="applyFilter">
        {{ $trans('global.filter') }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
    initForm: { type: Object, required: true },
    form: { type: Object, required: true },
});

const emit = defineEmits(['hide']);
const router = useRouter();
const route = useRoute();
const emitter = inject('emitter');

const applyFilter = () => {
    const query = { ...route.query };
    for (const [key, value] of Object.entries(props.form)) {
        if (value) query[key] = value;
        else delete query[key];
    }
    delete query.page;
    router.push({ query });
    if (emitter) emitter.emit('listItems');
};

const resetForm = () => {
    Object.assign(props.form, { ...props.initForm });
    const query = { ...route.query };
    for (const key of Object.keys(props.initForm)) {
        delete query[key];
    }
    router.push({ query });
    if (emitter) emitter.emit('listItems');
};
</script>
