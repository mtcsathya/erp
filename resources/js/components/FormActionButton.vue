<template>
  <div class="flex justify-between" :class="{ 'mt-4': topMargin, 'bg-white px-2 pt-6': padding }">
    <!-- Left side: Reset + Keep Adding -->
    <div class="flex space-x-2 sm:space-x-4" :class="{ 'px-4 py-2': buttonPadding }">
      <BaseButton
        :disabled="disabled"
        class="hidden sm:block"
        design="secondary"
        @click="resetForm"
      >
        {{ $trans('general.reset') }}
      </BaseButton>

      <BaseCheckbox
        v-if="!isEdit && keepAdding"
        v-model="state.keepAdding"
        name="keepAdding"
        :label="$trans('general.keep_adding')"
      />
    </div>

    <!-- Right side: Cancel + Submit -->
    <div class="space-x-2 sm:space-x-4" :class="{ 'px-4 py-2': buttonPadding }">
      <slot />

      <!-- Cancel for modal/cancelAction -->
      <BaseButton
        v-if="isModal || cancelAction"
        design="error"
        @click="$emit('cancelled')"
      >
        {{ $trans('general.cancel') }}
      </BaseButton>

      <!-- Cancel with redirect -->
      <BaseButton
        v-if="!isModal && hasRedirect"
        design="error"
        @click="emitter?.emit('redirect')"
      >
        {{ $trans('general.cancel') }}
      </BaseButton>

      <!-- Submit button -->
      <BaseButton
        v-if="!submitText"
        :disabled="disabled"
        design="primary"
        type="submit"
      >
        <span v-if="isEdit">{{ $trans('general.update') }}</span>
        <span v-else>{{ $trans('general.save') }}</span>
      </BaseButton>

      <!-- Custom submit text -->
      <BaseButton
        v-if="submitText"
        :disabled="disabled"
        design="primary"
        type="submit"
      >
        {{ submitText }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, inject } from 'vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';

const props = defineProps({
    action: { type: String, default: '' },
    redirect: { type: [String, Object], default: '' },
    cancelAction: { type: Boolean, default: false },
    padding: { type: Boolean, default: false },
    buttonPadding: { type: Boolean, default: false },
    topMargin: { type: Boolean, default: false },
    keepAdding: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    submitText: { type: String, default: '' },
    isModal: { type: Boolean, default: false },
});

defineEmits(['reset', 'cancelled']);

const route = useRoute();
const emitter = inject('emitter', null);
const $trans = inject('$trans', (key) => key);

const actionType = computed(() => props.action || route?.meta?.type);
const isEdit = computed(() => actionType.value === 'edit' || actionType.value === 'update');
const hasRedirect = computed(() => {
    return !!(typeof props.redirect === 'string' && props.redirect) ||
           !!(typeof props.redirect === 'object' && props.redirect);
});

const state = reactive({ keepAdding: false });

const resetForm = async () => {
    const result = await Swal.fire({
        icon: 'question',
        title: $trans('general.alerts.reset_title'),
        text: $trans('general.alerts.reset_description'),
        showCancelButton: true,
        confirmButtonText: $trans('general.yes'),
        cancelButtonText: $trans('general.no'),
    });
    if (result.isConfirmed) {
        emitter?.emit('resetForm');
    }
};

watch(() => state.keepAdding, (val) => {
    emitter?.emit('keepAdding', val);
});
</script>
