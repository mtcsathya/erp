<template>
  <div class="flex items-center space-x-2">
    <router-link
      v-if="actions.includes('create')"
      :to="{ name: `${name}Create` }"
      class="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700"
    >
      {{ $trans('global.add') }} {{ title }}
    </router-link>
    <router-link
      v-if="actions.includes('list')"
      :to="{ name: `${name}List` }"
      class="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-md hover:bg-gray-300"
    >
      {{ $trans('global.list') }}
    </router-link>
  </div>
</template>

<script setup>
defineProps({
    name: { type: String, required: true },
    title: { type: String, default: '' },
    actions: { type: Array, default: () => ['create'] },
});
</script>
