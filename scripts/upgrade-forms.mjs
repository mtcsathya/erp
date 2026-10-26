import fs from 'fs';
import path from 'path';

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

// Map form name to directory under Pages/
const nameToDir = {};
// Auto-discover from existing files
function scanForms(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            scanForms(path.join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
        } else if (entry.name === 'Form.vue') {
            const entityName = prefix.replace(/\//g, '');
            nameToDir[entityName + 'Form'] = prefix;
        } else if (entry.name === 'Action.vue') {
            const entityName = prefix.replace(/\//g, '');
            nameToDir[entityName + 'Form'] = prefix;
        }
    }
}
scanForms('resources/js/views/Pages');

// Read form data
const lines = fs.readFileSync('/tmp/all_forms.txt', 'utf8').trim().split('\n');
let upgraded = 0;

for (const line of lines) {
    const [formName, initUrl, fieldsStr] = line.split('|');
    if (!formName || !fieldsStr) continue;

    const entityName = formName.replace('Form', '');
    let dirPath = nameToDir[formName];

    if (!dirPath) {
        // Try common mappings
        const mappings = {
            'Finance': 'Finance', 'Exam': 'Exam', 'Student': 'Student',
            'Employee': 'Employee', 'Inventory': 'Inventory', 'Library': 'Library',
            'Reception': 'Reception', 'Mess': 'Mess', 'Transport': 'Transport',
            'Helpdesk': 'Helpdesk', 'Approval': 'Approval', 'Calendar': 'Calendar',
            'Discipline': 'Discipline', 'Site': 'Site', 'Config': 'Config',
            'Resource': 'Resource', 'Academic': 'Academic', 'Hostel': 'Hostel',
            'Recruitment': 'Recruitment', 'Activity': 'Activity',
        };
        // Try to find from entity name
        for (const [prefix, mod] of Object.entries(mappings)) {
            if (entityName.startsWith(prefix)) {
                const rest = entityName.slice(prefix.length);
                const candidate = `${mod}/${rest}`;
                if (fs.existsSync(`resources/js/views/Pages/${candidate}/Action.vue`)) {
                    dirPath = candidate;
                    break;
                }
                // Try nested
                const parts = rest.match(/[A-Z][a-z]*/g);
                if (parts && parts.length > 1) {
                    const nested = `${mod}/${parts.join('/')}`;
                    if (fs.existsSync(`resources/js/views/Pages/${nested}/Action.vue`)) {
                        dirPath = nested;
                        break;
                    }
                }
            }
        }
        // Top-level modules
        if (!dirPath) {
            const topLevel = ['Blog', 'News', 'Gallery', 'Task', 'Device', 'Organization', 'Reminder', 'CustomField', 'User', 'Team', 'Contact', 'Option', 'Post', 'Todo'];
            for (const mod of topLevel) {
                if (entityName === mod || formName === `${mod}Form`) {
                    if (fs.existsSync(`resources/js/views/Pages/${mod}/Action.vue`)) {
                        dirPath = mod;
                        break;
                    }
                }
            }
        }
    }

    if (!dirPath) continue;

    const formPath = `resources/js/views/Pages/${dirPath}/Form.vue`;
    const actionPath = `resources/js/views/Pages/${dirPath}/Action.vue`;

    // Only upgrade if Form.vue doesn't exist or Action.vue has generic placeholder
    const needsUpgrade = !fs.existsSync(formPath) ||
        (fs.existsSync(actionPath) && fs.readFileSync(actionPath, 'utf8').includes('TODO: Add form fields'));

    if (!needsUpgrade && fs.existsSync(formPath)) {
        // Check if Form.vue is a stub
        const formContent = fs.readFileSync(formPath, 'utf8');
        if (!formContent.includes('TODO') && formContent.includes('v-model="form.')) {
            continue; // Already has real fields
        }
    }

    const fields = fieldsStr.split(',').filter(f => f.trim());
    if (fields.length === 0) continue;

    const pathParts = dirPath.split('/');
    const moduleKey = toSnakeCase(pathParts[0]);
    const entityKey = toSnakeCase(pathParts[pathParts.length - 1]);
    const transPrefix = pathParts.map(p => toSnakeCase(p)).join('.');
    const routeName = pathParts.join('');
    const url = initUrl || pathParts.map(p => p.charAt(0).toLowerCase() + p.slice(1)).join('/') + '/';

    const formFields = fields.map(f => {
        const isTextarea = ['description', 'remarks', 'content', 'reason', 'conversation', 'excerpt', 'summary', 'qualificationSummary', 'jobProfile', 'note', 'itinerary', 'answer', 'instructions', 'responsibility', 'eligibility', 'benefits', 'action', 'rejectionRemarks', 'messageToVendor', 'declaration'].includes(f);
        const isCheckbox = f.startsWith('is') || f.startsWith('has') || f.startsWith('enable') || f.startsWith('create') || f.startsWith('ignore') || f === 'isDuplicate' || f === 'forceChangePassword';
        let comp, extra;
        if (isCheckbox) {
            comp = 'BaseCheckbox';
            extra = '';
        } else if (isTextarea) {
            comp = 'BaseTextarea';
            extra = '';
        } else {
            comp = 'BaseInput';
            extra = '\n          type="text"';
        }
        const col = isTextarea ? 'col-span-3' : 'col-span-3 sm:col-span-1';
        return `      <div class="${col}">
        <${comp}${extra}
          v-model="form.${f}"
          name="${f}"
          :label="$trans('${transPrefix}.props.${f}')"
          v-model:error="formErrors.${f}"
        />
      </div>`;
    }).join('\n');

    const initFormFields = fields.map(f => {
        const isCheckbox = f.startsWith('is') || f.startsWith('has') || f.startsWith('enable') || f.startsWith('create') || f.startsWith('ignore') || f === 'isDuplicate' || f === 'forceChangePassword';
        return `    ${f}: ${isCheckbox ? 'false' : "''"}`;
    }).join(',\n');

    // Write Form.vue
    const formVue = `<template>
  <FormAction
    :pre-requisites="true"
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="${routeName}"
  >
    <div class="grid grid-cols-3 gap-6">
${formFields}
    </div>
  </FormAction>
</template>

<script setup>
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const initUrl = '${url}';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
${initFormFields},
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
`;

    fs.writeFileSync(formPath, formVue);

    // Also update Action.vue if it has generic placeholder
    if (fs.existsSync(actionPath)) {
        const actionContent = fs.readFileSync(actionPath, 'utf8');
        if (actionContent.includes('TODO: Add form fields') || actionContent.includes('FormAction')) {
            // Rewrite Action to use Form component
            const actionVue = `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${moduleKey}.${moduleKey}'), path: '${pathParts[0]}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routeName}List' },
    ]"
  >
    <PageHeaderAction name="${routeName}" :title="$trans('${transPrefix}.${entityKey}')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <${entityName}Form />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ${entityName}Form from './Form.vue';
const route = useRoute();
</script>
`;
            fs.writeFileSync(actionPath, actionVue);
        }
    }

    upgraded++;
    console.log(`Upgraded: ${dirPath} (${fields.length} fields)`);
}

console.log(`\nDone! Upgraded ${upgraded} modules with real form fields.`);
