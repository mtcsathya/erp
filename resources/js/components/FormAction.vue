<template>
  <form @submit.prevent="submit">
    <BaseLoader :is-loading="isLoading">
      <template v-if="noCard">
        <slot />
        <FormActionButton
          v-if="!noActionButton"
          class="mt-6"
          :disabled="disabled"
          :submit-text="submitText"
          :is-modal="isModal"
          :cancel-action="cancelAction"
          :redirect="redirect"
          :keep-adding="showKeepAdding"
          :button-padding="buttonPadding"
          @cancelled="$emit('cancelled')"
        >
          <slot name="additionalButton" />
        </FormActionButton>
        <slot name="additionalAction" />
        <slot name="footer" />
      </template>

      <template v-else>
        <BaseCard :less-padding="lessPadding">
          <template #default>
            <slot />
            <slot name="additionalAction" />
            <slot name="footer" />
          </template>
          <template #footer>
            <FormActionButton
              v-if="!noActionButton"
              :disabled="disabled"
              :submit-text="submitText"
              :is-modal="isModal"
              :cancel-action="cancelAction"
              :redirect="redirect"
              :keep-adding="showKeepAdding"
              :button-padding="buttonPadding"
              @cancelled="$emit('cancelled')"
            >
              <slot name="additionalButton" />
            </FormActionButton>
          </template>
        </BaseCard>
      </template>
    </BaseLoader>
  </form>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import lodash from 'lodash';

const props = defineProps({
    noCard: { type: Boolean, default: false },
    initUrl: { type: String, default: '', required: true },
    uuid: { type: String, default: '' },
    moduleUuid: { type: String, default: '' },
    preRequisites: { type: [Boolean, String, Object], default: false },
    preRequisiteUrl: { type: String, default: '' },
    preRequisiteCustomUrl: { type: String, default: '' },
    preRequisiteHasAdditionalParams: { type: Boolean, default: false },
    preRequisiteAdditionalParams: { type: Object, default: () => ({}) },
    noDataFetch: { type: Boolean, default: false },
    dataFetch: { type: String, default: '' },
    form: { type: Object, default: () => ({}) },
    initForm: { type: Object, default: () => ({}) },
    redirect: { type: [String, Object], default: '' },
    action: { type: String, default: '' },
    noActionButton: { type: Boolean, default: false },
    resetForm: { type: Boolean, default: true },
    resetFormError: { type: Boolean, default: true },
    beforeSubmit: { type: Function, default: () => {} },
    afterSubmit: { type: Function, default: () => {} },
    afterReset: { type: Function, default: () => {} },
    setForm: { type: Function, default: () => {} },
    afterSet: { type: Function, default: () => {} },
    stayOn: { type: Boolean, default: false },
    keepAdding: { type: Boolean, default: true },
    validateUnchanged: { type: Boolean, default: true },
    confirmation: { type: Boolean, default: false },
    isModal: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    submitText: { type: String, default: '' },
    lessPadding: { type: Boolean, default: false },
    buttonPadding: { type: Boolean, default: false },
    sideover: { type: Boolean, default: false },
    cancelAction: { type: Boolean, default: false },
    hasSetupWizard: { type: Boolean, default: false },
});

const emit = defineEmits([
    'setPreRequisites', 'redirectTo', 'resetForm', 'submitted',
    'completed', 'end', 'resetMediaFiles', 'cancelled',
]);

const route = useRoute();
const router = useRouter();
const store = useStore();
const emitter = inject('emitter', null);
const $trans = inject('$trans', (key) => key);

const isLoading = ref(false);
const keepAddingState = reactive({ keepAdding: false });

const showKeepAdding = computed(() => props.stayOn ? false : props.keepAdding);

// Check if function is a real handler (not the default empty function)
const isRealFunction = (fn) => fn.name !== '_default' && fn.name !== 'default' && fn.name !== '';

// Fetch pre-requisites
const fetchPreRequisites = async () => {
    isLoading.value = true;
    let params = props.preRequisites;

    if (typeof props.preRequisites === 'string') {
        params = { data: props.preRequisites };
    } else if (typeof props.preRequisites === 'boolean' && props.preRequisiteHasAdditionalParams) {
        params = { data: props.preRequisiteAdditionalParams };
    } else if (route.params.uuid) {
        if (typeof props.preRequisites === 'object') {
            params = { ...props.preRequisites, uuid: route.params.uuid };
        } else {
            params = { uuid: route.params.uuid };
        }
    }

    try {
        const url = (props.preRequisiteUrl || props.initUrl) + (props.preRequisiteCustomUrl || 'preRequisite');
        const data = await store.dispatch(url, params);
        emit('setPreRequisites', data);
    } finally {
        isLoading.value = false;
    }
};

// Fetch existing data for edit mode
const fetchData = async () => {
    isLoading.value = true;
    try {
        const data = await store.dispatch(props.initUrl + 'get', {
            uuid: route.params.uuid,
            moduleUuid: props.moduleUuid,
            queryType: route.meta.queryType,
        });
        setFormData(data);
    } catch (e) {
        redirectAway();
    } finally {
        isLoading.value = false;
    }
};

// Fetch custom data
const fetchCustomData = async () => {
    isLoading.value = true;
    try {
        const data = await store.dispatch(props.initUrl + 'fetch', { type: props.dataFetch });
        setFormData(data);
    } catch (e) {
        redirectAway();
    } finally {
        isLoading.value = false;
    }
};

// Set form data from API response
const setFormData = (data) => {
    store.dispatch(props.initUrl + 'resetFormErrors');

    if (isRealFunction(props.setForm)) {
        props.setForm(data);
        if (data?.hasOwnProperty('mediaToken')) {
            emitter?.emit('setMediaToken', data.mediaToken);
        }
    } else {
        if (route.meta.type === 'duplicate') {
            data.media = [];
        }
        Object.assign(props.initForm, lodash.cloneDeep(data));
        Object.assign(props.form, lodash.cloneDeep(data));
        if (props.form.hasOwnProperty('mediaToken')) {
            emitter?.emit('setMediaToken', props.form.mediaToken);
        }
        if (isRealFunction(props.afterSet)) {
            props.afterSet(data);
        }
    }
};

// Submit the form
const submit = async () => {
    if (isLoading.value) return;

    // Check if form has changed
    const skipKeys = ['mediaHash', 'mediaToken'];
    if (props.validateUnchanged) {
        const formClean = lodash.omit(props.form, skipKeys);
        const initClean = lodash.omit(props.initForm, skipKeys);
        if (lodash.isEqual(formClean, initClean)) {
            return; // Nothing changed
        }
    }

    if (isRealFunction(props.beforeSubmit)) {
        props.beforeSubmit();
    }

    const actionName = props.initUrl + (props.action || route.meta.action);
    isLoading.value = true;

    try {
        const response = await store.dispatch(actionName, {
            form: props.form,
            moduleUuid: props.moduleUuid,
            uuid: props.uuid || route.params.uuid,
            queryType: route.meta.queryType,
            routeQuery: route.query,
        });

        if (props.hasSetupWizard) {
            emitter?.emit('refreshSetupWizard');
        }

        // Reset form after submission
        if (!props.isModal) {
            if (props.stayOn) {
                Object.assign(props.initForm, lodash.cloneDeep(props.form));
            } else {
                Object.assign(props.form, lodash.cloneDeep(props.initForm));
            }
        }

        if (!props.stayOn || props.keepAdding) {
            emit('resetMediaFiles');
            emitter?.emit('resetFiles');
        }

        if (isRealFunction(props.afterSubmit)) {
            props.afterSubmit(response);
            return;
        }

        emit('submitted', response);

        if (!props.sideover && !keepAddingState.keepAdding && !props.stayOn) {
            redirectAway();
        } else {
            emit('completed');
            if (props.sideover && !keepAddingState.keepAdding) {
                emit('end');
            }
        }
    } finally {
        isLoading.value = false;
    }
};

// Redirect after form completion
const redirectAway = () => {
    if (!props.redirect && !props.isModal) {
        router.go(-1);
    } else if (props.redirect && typeof props.redirect === 'string') {
        router.push({ name: props.redirect });
    } else if (props.redirect && typeof props.redirect === 'object') {
        router.push(props.redirect);
    } else {
        emit('redirectTo');
    }
};

// Reset form errors on route change
const resetErrors = () => {
    if (props.resetFormError) {
        store.dispatch(props.initUrl + 'resetFormErrors');
    }
};

onMounted(async () => {
    // Set up emitter listeners
    emitter?.on('redirect', redirectAway);
    emitter?.on('keepAdding', (val) => { keepAddingState.keepAdding = val; });
    emitter?.on('resetForm', () => {
        Object.assign(props.form, lodash.cloneDeep(props.initForm));
        emit('resetMediaFiles');
        emitter?.emit('resetFiles');
        resetErrors();
        if (isRealFunction(props.afterReset)) props.afterReset();
    });
    emitter?.on('submitForm', submit);

    if (props.preRequisites) {
        emitter?.on('refreshPreRequisites', fetchPreRequisites);
        await fetchPreRequisites();
    }

    if (!props.noDataFetch && route.params.uuid) {
        await fetchData();
    }

    if (props.dataFetch) {
        await fetchCustomData();
    }
});

onUnmounted(() => {
    emitter?.all?.delete('redirect');
    emitter?.all?.delete('keepAdding');
    emitter?.all?.delete('resetForm');
    emitter?.all?.delete('submitForm');
    emitter?.all?.delete('refreshPreRequisites');
});
</script>
