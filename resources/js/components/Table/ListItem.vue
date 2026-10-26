<template>
  <div :class="{ 'space-y-4': spacing }">
    <slot name="header" />
    <slot name="after-header" />
    <slot name="import" />
    <slot name="before-filter" />
    <slot name="filter" />
    <slot name="after-filter" />

    <BaseLoader :is-loading="isLoading">
      <slot :items="items" />
    </BaseLoader>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, inject, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { apiClient } from '@/stores/helpers';
import Swal from 'sweetalert2';

const props = defineProps({
    initUrl: { type: String, required: true },
    uuid: { type: String, default: '' },
    preRequisites: { type: [Boolean, String], default: false },
    additionalQuery: { type: Object, default: () => ({}) },
    spacing: { type: Boolean, default: true },
    refresh: { type: Boolean, default: false },
});

const emit = defineEmits(['setPreRequisites', 'setItems', 'resetSelected', 'refreshed']);
const route = useRoute();
const store = useStore();
const emitter = inject('emitter', null);
const $trans = inject('$trans', (key) => key);

const isLoading = ref(false);
const items = reactive({
    data: [],
    headers: [],
    meta: {},
});

// Fetch list items
const fetchItems = async (params = {}) => {
    isLoading.value = true;
    try {
        const data = await apiClient.get(props.initUrl, {
            params: {
                ...props.additionalQuery,
                ...route.query,
                ...params,
            },
        });
        Object.assign(items, {
            data: data.data || data.items || data || [],
            headers: data.headers || [],
            meta: data.meta || {},
        });
        emit('setItems', items);
    } catch (e) {
        console.error('Failed to fetch items:', e);
    } finally {
        isLoading.value = false;
    }
};

// Fetch pre-requisites
const fetchPreRequisites = async () => {
    if (!props.preRequisites) return;
    try {
        const data = await apiClient.get(`${props.initUrl}/pre-requisite`);
        emit('setPreRequisites', data);
    } catch (e) {}
};

// Delete single item
const deleteItem = async ({ uuid, force }) => {
    const result = await Swal.fire({
        icon: 'warning',
        title: $trans('general.alerts.delete_title'),
        text: $trans('general.alerts.delete_description'),
        showCancelButton: true,
        confirmButtonText: $trans('general.yes'),
        cancelButtonText: $trans('general.no'),
        confirmButtonColor: '#b91c1c',
    });

    if (!result.isConfirmed) return;

    try {
        await apiClient.delete(`${props.initUrl}/${uuid}`, { params: { force: force || false } });
        fetchItems();
    } catch (e) {
        console.error('Failed to delete:', e);
    }
};

// Delete multiple items
const deleteItems = async ({ uuids }) => {
    const result = await Swal.fire({
        icon: 'warning',
        title: $trans('general.alerts.delete_title'),
        showCancelButton: true,
        confirmButtonText: $trans('general.yes'),
        cancelButtonText: $trans('general.no'),
        confirmButtonColor: '#b91c1c',
    });

    if (!result.isConfirmed) return;

    try {
        await apiClient.post(`${props.initUrl}/delete`, { uuids });
        fetchItems();
        emit('resetSelected');
    } catch (e) {}
};

// Action on single item (status change, etc.)
const actionItem = async ({ uuid, action, data }) => {
    try {
        await apiClient.post(`${props.initUrl}/${uuid}/${action}`, data || {});
        fetchItems();
    } catch (e) {}
};

onMounted(() => {
    if (props.preRequisites) fetchPreRequisites();
    fetchItems();

    if (emitter) {
        emitter.on('listItems', fetchItems);
        emitter.on('deleteItem', deleteItem);
        emitter.on('deleteItems', deleteItems);
        emitter.on('actionItem', actionItem);
    }
});

onUnmounted(() => {
    if (emitter) {
        emitter.all?.delete('listItems');
        emitter.all?.delete('deleteItem');
        emitter.all?.delete('deleteItems');
        emitter.all?.delete('actionItem');
    }
});

watch(() => route.query, () => fetchItems(), { deep: true });
watch(() => props.refresh, (val) => {
    if (val) { fetchItems(); emit('refreshed'); }
});
</script>
