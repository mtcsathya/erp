<template>
  <BaseLoader :is-loading="isLoading">
    <div class="space-y-4">
      <slot />
    </div>
  </BaseLoader>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject, watch } from 'vue';
import { useRouter } from 'vue-router';
import { apiClient } from '@/stores/helpers';
import Swal from 'sweetalert2';

const props = defineProps({
    initUrl: { type: String, required: true },
    uuid: { type: String, required: true },
    moduleUuid: { type: String, default: '' },
    redirect: { type: [String, Object], default: '' },
    refresh: { type: Boolean, default: false },
    additionalQuery: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['setItem', 'redirectTo', 'refreshed']);
const router = useRouter();
const emitter = inject('emitter', null);
const $trans = inject('$trans', (key) => key);
const isLoading = ref(false);

const fetchItem = async () => {
    isLoading.value = true;
    try {
        const url = props.moduleUuid
            ? `${props.initUrl}/${props.moduleUuid}/${props.uuid}`
            : `${props.initUrl}/${props.uuid}`;
        const data = await apiClient.get(url, { params: props.additionalQuery });
        emit('setItem', data);
    } catch (e) {
        if (e?.responseStatus === 404 || e?.response?.status === 404) {
            redirectAway();
        }
        console.error('Failed to fetch item:', e);
    } finally {
        isLoading.value = false;
    }
};

const redirectAway = () => {
    if (props.redirect && typeof props.redirect === 'string') {
        router.push({ name: props.redirect });
    } else if (props.redirect && typeof props.redirect === 'object') {
        router.push(props.redirect);
    } else {
        emit('redirectTo');
    }
};

const deleteItem = async () => {
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
        await apiClient.delete(`${props.initUrl}/${props.uuid}`);
        redirectAway();
    } catch (e) {}
};

const actionItem = async ({ action, data }) => {
    try {
        await apiClient.post(`${props.initUrl}/${props.uuid}/${action}`, data || {});
        fetchItem();
    } catch (e) {}
};

onMounted(() => {
    fetchItem();

    if (emitter) {
        emitter.on('showDeleteItem', deleteItem);
        emitter.on('showActionItem', actionItem);
        emitter.on('refreshItem', fetchItem);
    }
});

onUnmounted(() => {
    if (emitter) {
        emitter.all?.delete('showDeleteItem');
        emitter.all?.delete('showActionItem');
        emitter.all?.delete('refreshItem');
    }
});

watch(() => props.refresh, (val) => {
    if (val) { fetchItem(); emit('refreshed'); }
});
</script>
