import { reactive, watch, computed } from 'vue';
import { useStore } from 'vuex';

/**
 * Reactive form error binding that watches Vuex store form errors.
 *
 * @param {string} initUrl - The initUrl from the form (e.g., 'academic/department/')
 * @returns {Object} Reactive errors object bound to the store module's formErrors
 */
export function useFormErrors(initUrl) {
    const store = useStore();
    const errors = reactive({});

    if (initUrl) {
        // Convert initUrl to Vuex module path
        // 'academic/department/' -> 'academic/department'
        const modulePath = initUrl.replace(/\/$/, '');

        // Watch the store module's formErrors
        const getter = `${modulePath}/getFormErrors`;

        watch(
            () => {
                try { return store.getters[getter]; } catch (e) { return null; }
            },
            (newErrors) => {
                // Clear existing
                Object.keys(errors).forEach(key => delete errors[key]);
                // Set new errors
                if (newErrors && typeof newErrors === 'object') {
                    Object.assign(errors, newErrors);
                }
            },
            { deep: true }
        );
    }

    return errors;
}

/**
 * Column visibility composable with cookie/localStorage persistence.
 *
 * @param {string} prefix - Storage key prefix
 * @returns {{ applyVisibility, saveVisibility }}
 */
export function useColumnVisibility(prefix) {
    const storageKey = `column_visibility_${prefix}`;

    function applyVisibility(columns) {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            try {
                const saved = JSON.parse(stored);
                return columns.map(col => ({
                    ...col,
                    visibility: saved.hasOwnProperty(col.key) ? saved[col.key] : col.visibility !== false,
                }));
            } catch (e) {}
        }
        return columns;
    }

    function saveVisibility(keys) {
        localStorage.setItem(storageKey, JSON.stringify(keys));
    }

    return { applyVisibility, saveVisibility };
}
