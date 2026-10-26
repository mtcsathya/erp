import fs from 'fs';
import path from 'path';

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

// Find all remaining stub .vue files
function findStubs(dir) {
    const stubs = [];
    if (!fs.existsSync(dir)) return stubs;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            stubs.push(...findStubs(fullPath));
        } else if (entry.name.endsWith('.vue')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('TODO: Reconstruct')) {
                stubs.push(fullPath);
            }
        }
    }
    return stubs;
}

const stubs = findStubs('resources/js/views/Pages');
let generated = 0;

for (const filePath of stubs) {
    const rel = filePath.replace('resources/js/views/Pages/', '');
    const parts = rel.split('/');
    const fileName = parts[parts.length - 1].replace('.vue', '');
    const dirParts = parts.slice(0, -1);

    // Skip Config pages (already done)
    if (dirParts.includes('Config')) continue;

    const moduleName = dirParts[0];
    const moduleKey = toSnakeCase(moduleName);
    const routePrefix = dirParts.join('');
    const entityKey = dirParts.length > 1 ? toSnakeCase(dirParts[dirParts.length - 1]) : moduleKey;
    const transPrefix = dirParts.map(p => toSnakeCase(p)).join('.');

    // Determine initUrl from directory path
    const urlParts = dirParts.map(p => {
        // Convert PascalCase to camelCase for URL
        return p.charAt(0).toLowerCase() + p.slice(1);
    });
    const initUrl = urlParts.join('/') + '/';

    if (fileName === 'Index') {
        // List/Index page
        fs.writeFileSync(filePath, `<template>
  <ListItem :init-url="initUrl" @set-items="setItems">
    <template #header>
      <PageHeader
        :title="$trans('${transPrefix}.${entityKey}')"
        :navs="[{ label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' }]"
      >
        <PageHeaderAction
          url="${initUrl}" name="${routePrefix}"
          :title="$trans('${transPrefix}.${entityKey}')"
          :actions="['create']"
          :dropdown-actions="['print', 'pdf', 'excel']"
        />
      </PageHeader>
    </template>
    <template #default>
      <ParentTransition appear :visibility="true">
        <DataTable :header="items.headers" :meta="items.meta" module="${transPrefix}">
          <template #default>
            <DataRow v-for="item in items.data" :key="item.uuid">
              <DataCell name="name">{{ item.name || item.title || item.label }}</DataCell>
              <DataCell name="createdAt">{{ item.createdAt?.formatted }}</DataCell>
            </DataRow>
          </template>
        </DataTable>
      </ParentTransition>
    </template>
  </ListItem>
</template>

<script setup>
import { reactive } from 'vue';
const initUrl = '${initUrl}';
const items = reactive({});
const setItems = (data) => { Object.assign(items, data); };
</script>
`);
        generated++;
    } else if (fileName === 'Action') {
        // Generic Action page (form not yet extracted)
        fs.writeFileSync(filePath, `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routePrefix}List' },
    ]"
  >
    <PageHeaderAction name="${routePrefix}" :title="$trans('${transPrefix}.${entityKey}')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      redirect="${routePrefix}"
    >
      <div class="grid grid-cols-3 gap-6">
        <!-- TODO: Add form fields from beautified source -->
        <div class="col-span-3">
          <BaseInput type="text" v-model="form.name" name="name" :label="$trans('${transPrefix}.props.name')" />
        </div>
      </div>
    </FormAction>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const initUrl = '${initUrl}';
const initForm = { name: '' };
const form = reactive({ ...initForm });
const setForm = (data) => {
    Object.assign(initForm, { ...data });
    Object.assign(form, { ...initForm });
};
</script>
`);
        generated++;
    } else if (fileName === 'Show') {
        // Generic Show page
        fs.writeFileSync(filePath, `<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' },
      { label: $trans('${transPrefix}.${entityKey}'), path: '${routePrefix}List' },
    ]"
  >
    <PageHeaderAction name="${routePrefix}" :title="$trans('${transPrefix}.${entityKey}')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: '${routePrefix}' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('${transPrefix}.${entityKey}') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('general.name')">{{ item.name || item.title }}</ListItemView>
                <ListItemView :label="$trans('general.created_at')">{{ item.createdAt?.formatted }}</ListItemView>
                <ListItemView :label="$trans('general.updated_at')">{{ item.updatedAt?.formatted }}</ListItemView>
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
const initUrl = '${initUrl}';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
`);
        generated++;
    } else if (['Edit', 'Wizard', 'Preview', 'Print', 'Process', 'Assign', 'Statement', 'Batch', 'Mark', 'MarkProduction'].includes(fileName)) {
        // Specialized pages - create with placeholder
        fs.writeFileSync(filePath, `<template>
  <PageHeader
    :title="$trans('${transPrefix}.${entityKey}')"
    :navs="[{ label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' }]"
  />

  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('${transPrefix}.${entityKey}') }} - ${fileName}</template>
      <div class="p-4">
        <!-- TODO: Reconstruct ${fileName} page from beautified source -->
        <p class="text-gray-500">This ${fileName} page needs to be reconstructed from the beautified source.</p>
      </div>
    </BaseCard>
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
`);
        generated++;
    } else {
        // Other standalone pages (Message, Selection, General, Submit, etc.)
        fs.writeFileSync(filePath, `<template>
  <div>
    <!-- TODO: Reconstruct ${fileName} from beautified source -->
    <!-- Path: ${rel} -->
    <BaseCard>
      <template #title>${fileName}</template>
      <div class="p-4">
        <p class="text-gray-500">${fileName} page - to be reconstructed.</p>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
`);
        generated++;
    }
}

console.log(`Generated ${generated} remaining pages.`);
