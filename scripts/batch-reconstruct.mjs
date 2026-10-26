import fs from 'fs';
import path from 'path';

// Read manifest to get component → compiled file mapping
const manifest = JSON.parse(fs.readFileSync('public/build/manifest.json', 'utf8'));

// Get all Vue component paths organized by module/entity
const vueFiles = Object.keys(manifest)
    .filter(k => k.startsWith('resources/js/views/Pages/') && k.endsWith('.vue'))
    .sort();

// Parse beautified files to extract initForm and initUrl
function extractFormData(beautifiedDir, compiledFilename) {
    // Find matching beautified file
    const basename = path.basename(compiledFilename);
    const beautifiedPath = path.join(beautifiedDir, basename);

    if (!fs.existsSync(beautifiedPath)) return null;

    const content = fs.readFileSync(beautifiedPath, 'utf8');

    // Extract component name
    const nameMatch = content.match(/name:\s*"(\w+)"/);
    const componentName = nameMatch ? nameMatch[1] : null;

    // Extract initUrl - look for quoted string with forward slashes that looks like an API path
    const urlMatches = [...content.matchAll(/(?:const\s+\w+\s*=\s*|=\s*)"([a-z]+\/[a-zA-Z/]+\/)"/g)];
    const initUrl = urlMatches.length > 0 ? urlMatches[0][1] : null;

    // Extract initForm fields - look for object with empty string values
    const formMatch = content.match(/(?:const\s+\w+\s*=\s*)\{([^}]+)\}/);
    if (formMatch) {
        const fields = [...formMatch[1].matchAll(/(\w+)\s*:\s*""/g)].map(m => m[1]);
        if (fields.length > 0) {
            return { componentName, initUrl, fields };
        }
    }

    // Fallback: extract fields from modelValue bindings
    const modelFields = [...content.matchAll(/modelValue:\s*\w+\.(\w+)/g)].map(m => m[1]);
    const uniqueFields = [...new Set(modelFields)];
    if (uniqueFields.length > 0) {
        return { componentName, initUrl, fields: uniqueFields };
    }

    return { componentName, initUrl, fields: [] };
}

// Extract nav labels from beautified file
function extractNavLabels(content) {
    const navMatches = [...content.matchAll(/\$trans\("([^"]+)"\)/g)].map(m => m[1]);
    return navMatches;
}

// Group components by module/entity
const modules = {};
for (const filePath of vueFiles) {
    const rel = filePath.replace('resources/js/views/Pages/', '');
    const parts = rel.split('/');
    if (parts.length < 2) continue;

    const module = parts[0];
    if (['Layouts', 'Errors', 'Install', 'Product', 'Dashboard', 'Notification', 'Support', 'General', 'Attendance'].includes(module)) continue;

    const componentType = parts[parts.length - 1].replace('.vue', '');
    const entityPath = parts.slice(0, -1).join('/');

    if (!modules[entityPath]) modules[entityPath] = { files: {} };
    modules[entityPath].files[componentType] = filePath;
}

// For each entity with Action+Index+Show, generate the CRUD components
let generated = 0;
let skipped = 0;

for (const [entityPath, entity] of Object.entries(modules)) {
    const hasAction = entity.files['Action'];
    const hasIndex = entity.files['Index'];
    const hasShow = entity.files['Show'];

    if (!hasAction || !hasIndex || !hasShow) continue;

    // Check if already reconstructed (not a stub)
    const actionContent = fs.readFileSync(hasAction, 'utf8');
    if (!actionContent.includes('TODO: Reconstruct')) {
        skipped++;
        continue;
    }

    // Extract data from beautified file
    const compiledFile = manifest[hasAction]?.file;
    if (!compiledFile) continue;

    const formData = extractFormData('beautified', compiledFile);
    if (!formData || !formData.initUrl || formData.fields.length === 0) continue;

    const parts = entityPath.split('/');
    const moduleName = parts[0];
    const entityName = parts[parts.length - 1];

    // Generate translation key prefix
    const moduleKey = moduleName.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
    const entityKey = entityName.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
    const transPrefix = `${moduleKey}.${entityKey}`;

    // Route name prefix
    const routeName = parts.join('');

    // Parent nav label
    const parentLabel = `${moduleKey}.${moduleKey}`;

    // Generate Form.vue
    const formFields = formData.fields.map(field => {
        const isTextarea = field === 'description' || field === 'remarks' || field === 'content';
        const component = isTextarea ? 'BaseTextarea' : 'BaseInput';
        const colSpan = isTextarea ? 'col-span-3' : 'col-span-3 sm:col-span-1';
        return `      <div class="${colSpan}">
        <${component}
          ${isTextarea ? '' : 'type="text"\n          '}v-model="form.${field}"
          name="${field}"
          :label="$trans('${transPrefix}.props.${field}')"
          v-model:error="formErrors.${field}"
        />
      </div>`;
    }).join('\n');

    const initFormObj = formData.fields.map(f => `    ${f}: ''`).join(',\n');

    const formVue = `<template>
  <FormAction
    :pre-requisites="false"
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

const initUrl = '${formData.initUrl}';
const formErrors = useFormErrors(initUrl);
const preRequisites = reactive({});

const initForm = {
${initFormObj},
};

const form = reactive({ ...initForm });

const setPreRequisites = (data) => {
    Object.assign(preRequisites, data);
};

const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
`;

    // Generate Action.vue
    const actionVue = `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${parentLabel}'), path: '${moduleName}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routeName}List' },
    ]"
  >
    <PageHeaderAction
      name="${routeName}"
      :title="$trans('${transPrefix}.${entityKey}')"
      :actions="['list']"
    />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <${routeName}Form />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ${routeName}Form from './Form.vue';

const route = useRoute();
</script>
`;

    // Generate Index.vue
    const indexVue = `<template>
  <ListItem
    :init-url="initUrl"
    :additional-query="{ details: true }"
    @set-items="setItems"
  >
    <template #header>
      <PageHeader
        :title="$trans('${transPrefix}.${entityKey}')"
        :navs="[{ label: $trans('${parentLabel}'), path: '${moduleName}' }]"
      >
        <PageHeaderAction
          url="${formData.initUrl}"
          name="${routeName}"
          :title="$trans('${transPrefix}.${entityKey}')"
          :actions="['create', 'filter']"
          :dropdown-actions="['print', 'pdf', 'excel']"
          @toggle-filter="showFilter = !showFilter"
        />
      </PageHeader>
    </template>

    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable
          :header="items.headers"
          :meta="items.meta"
          module="${transPrefix}"
          @refresh="emitter.emit('listItems')"
        >
          <template #default>
            <DataRow
              v-for="item in items.data"
              :key="item.uuid"
              @double-click="router.push({ name: '${routeName}Show', params: { uuid: item.uuid } })"
            >
${formData.fields.slice(0, 4).map(f => `              <DataCell name="${f}">{{ item.${f} }}</DataCell>`).join('\n')}
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
              <DataCell name="action">
                <FloatingMenu>
                  <FloatingMenuItem icon="fas fa-arrow-circle-right" @click="router.push({ name: '${routeName}Show', params: { uuid: item.uuid } })">
                    {{ $trans('general.show') }}
                  </FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-edit" @click="router.push({ name: '${routeName}Edit', params: { uuid: item.uuid } })">
                    {{ $trans('general.edit') }}
                  </FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-copy" @click="router.push({ name: '${routeName}Duplicate', params: { uuid: item.uuid } })">
                    {{ $trans('general.duplicate') }}
                  </FloatingMenuItem>
                  <FloatingMenuItem icon="fas fa-trash" @click="emitter.emit('deleteItem', { uuid: item.uuid })">
                    {{ $trans('general.delete') }}
                  </FloatingMenuItem>
                </FloatingMenu>
              </DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const emitter = inject('emitter');

const initUrl = '${formData.initUrl}';
const showFilter = ref(false);
const items = reactive({});

const setItems = (data) => {
    Object.assign(items, data);
};
</script>
`;

    // Generate Show.vue
    const showFields = formData.fields.map(f => {
        return `                  <ListItemView :label="$trans('${transPrefix}.props.${f}')">
                    {{ item.${f} }}
                  </ListItemView>`;
    }).join('\n');

    const showVue = `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${parentLabel}'), path: '${moduleName}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routeName}List' },
    ]"
  >
    <PageHeaderAction
      name="${routeName}"
      :title="$trans('${transPrefix}.${entityKey}')"
      :actions="['list']"
    />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem
      :init-url="initUrl"
      :uuid="$route.params.uuid"
      @set-item="setItem"
      @redirect-to="router.push({ name: '${routeName}' })"
    >
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('${transPrefix}.${entityKey}') }}</template>
              <ListContainerVertical>
${showFields}
                <ListItemView :label="$trans('general.created_at')">
                  {{ item.createdAt?.formatted }}
                </ListItemView>
                <ListItemView :label="$trans('general.updated_at')">
                  {{ item.updatedAt?.formatted }}
                </ListItemView>
              </ListContainerVertical>
            </BaseCard>
          </template>
        </DetailLayoutVertical>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const initUrl = '${formData.initUrl}';
const item = reactive({});

const setItem = (data) => {
    Object.assign(item, data);
};
</script>
`;

    // Write files
    const formPath = path.join(path.dirname(hasAction), 'Form.vue');
    fs.writeFileSync(hasAction, actionVue);
    fs.writeFileSync(formPath, formVue);
    fs.writeFileSync(hasIndex, indexVue);
    fs.writeFileSync(hasShow, showVue);

    generated++;
    console.log(`Generated: ${entityPath} (${formData.fields.length} fields: ${formData.fields.join(', ')})`);
}

console.log(`\nDone! Generated ${generated} CRUD modules, skipped ${skipped} already done.`);
