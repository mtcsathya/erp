import fs from 'fs';
import path from 'path';

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

// Find all Config/Index.vue and Config/General.vue stubs
const configPaths = [];
function findConfigs(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            findConfigs(fullPath);
        } else if (entry.name === 'General.vue' || entry.name === 'Index.vue') {
            const rel = fullPath.replace('resources/js/views/Pages/', '');
            if (rel.includes('/Config/')) {
                configPaths.push({ path: fullPath, rel });
            }
        }
    }
}
findConfigs('resources/js/views/Pages');

let generated = 0;

for (const { path: filePath, rel } of configPaths) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('TODO: Reconstruct')) continue;

    const parts = rel.split('/');
    const moduleParts = parts.slice(0, parts.indexOf('Config'));
    const moduleName = moduleParts.join('');
    const moduleKey = moduleParts.map(p => toSnakeCase(p)).join('.');
    const fileName = parts[parts.length - 1].replace('.vue', '');

    if (fileName === 'Index') {
        // Config Index - sidebar with links to config sub-pages
        fs.writeFileSync(filePath, `<template>
  <PageHeader
    :title="$trans('${moduleKey}.config.config')"
    :navs="[{ label: $trans('${moduleKey}.${toSnakeCase(moduleParts[0])}'), path: '${moduleParts[0]}' }]"
  />

  <ParentTransition appear :visibility="true">
    <ConfigPage>
      <template #sidebar>
        <ConfigSidebar :items="sidebarItems" />
      </template>
      <router-view />
    </ConfigPage>
  </ParentTransition>
</template>

<script setup>
const sidebarItems = [
    { name: '${moduleName}ConfigGeneral', label: 'General' },
];
</script>
`);
    } else if (fileName === 'General') {
        // Config General page
        fs.writeFileSync(filePath, `<template>
  <ModuleConfig :title="$trans('${moduleKey}.config.general')">
    <FormAction
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      :set-form="setForm"
      action="config"
    >
      <div class="space-y-4">
        <!-- TODO: Add config fields from beautified source -->
        <p class="text-gray-500">Configuration settings to be reconstructed</p>
      </div>
    </FormAction>
  </ModuleConfig>
</template>

<script setup>
import { reactive } from 'vue';

const initUrl = '${moduleParts.map(p => toSnakeCase(p)).join('/')}/config/';
const initForm = {};
const form = reactive({});

const setForm = (data) => {
    Object.assign(form, data);
};
</script>
`);
    }
    generated++;
}

console.log(`Generated ${generated} config pages.`);
