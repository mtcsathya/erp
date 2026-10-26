<template>
  <div v-if="employee" class="flex items-center space-x-3">
    <img v-if="employee.avatar" :src="employee.avatar" class="h-10 w-10 rounded-full" />
    <div v-else class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-medium">
      {{ (employee.name || '?').charAt(0).toUpperCase() }}
    </div>
    <div>
      <div class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ employee.name }}</div>
      <div class="text-xs text-gray-500">{{ employee.designation?.name }}</div>
      <div v-if="employee.department" class="text-xs text-gray-400">{{ employee.department?.name }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({ employee: { type: Object, default: null } });
</script>
