import fs from 'fs';
import path from 'path';

const modulesDir = 'resources/js/stores/modules';
const modules = [];

function scanDir(dir, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            scanDir(path.join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
        } else if (entry.name.endsWith('.js')) {
            const moduleName = prefix ? `${prefix}/${entry.name.replace('.js', '')}` : entry.name.replace('.js', '');
            const importPath = `./modules/${moduleName}`;
            // Convert path to camelCase key: "finance/ledgerType" -> nested
            modules.push({ name: moduleName, importPath });
        }
    }
}

scanDir(modulesDir);
modules.sort((a, b) => a.name.localeCompare(b.name));

// Generate store index
const imports = modules.map((m, i) => {
    const varName = m.name.replace(/\//g, '_');
    return `import ${varName} from '${m.importPath}';`;
}).join('\n');

const moduleRegistrations = modules.map(m => {
    const varName = m.name.replace(/\//g, '_');
    return `        '${m.name}': ${varName},`;
}).join('\n');

const content = `import { createStore } from 'vuex';
${imports}

export default createStore({
    modules: {
${moduleRegistrations}
    },
});
`;

fs.writeFileSync('resources/js/stores/index.js', content);
console.log(`Created store index with ${modules.length} modules`);
