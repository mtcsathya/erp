<template>
  <BaseModal :show="visibility" @close="$emit('close')">
    <template #title>
      {{ $trans('global.reorder', { attribute: $trans('academic.department.department') }) }}
    </template>

    <template #default>
      <div v-if="departments.length">
        <draggable class="space-y-2" :list="departments" item-key="uuid">
          <template #item="{ element }">
            <div class="flex border dark:border-gray-400 rounded-xl px-4 py-2">
              <i class="fas fa-arrows mr-2 cursor-pointer dark:text-gray-400"></i>
              <BaseLabel>{{ element.name }}</BaseLabel>
            </div>
          </template>
        </draggable>
      </div>
      <div v-else>
        <BaseAlert design="info" size="xs">
          {{ $trans('general.errors.record_not_found') }}
        </BaseAlert>
      </div>

      <div v-if="departments.length" class="mt-4 flex justify-end">
        <BaseButton @click="saveOrder">
          {{ $trans('general.reorder') }}
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';

defineProps({ visibility: { type: Boolean, default: false } });
const emit = defineEmits(['close', 'refresh']);

const store = useStore();
const isLoading = ref(false);
const departments = reactive([]);

const fetchDepartments = async () => {
    isLoading.value = true;
    try {
        const data = await store.dispatch('academic/department/list', { params: { all: true } });
        departments.splice(0, departments.length, ...data);
    } finally {
        isLoading.value = false;
    }
};

const saveOrder = async () => {
    isLoading.value = true;
    try {
        await store.dispatch('academic/department/reorder', { data: { departments } });
        emit('refresh');
        emit('close');
    } finally {
        isLoading.value = false;
    }
};

onMounted(fetchDepartments);
</script>
