import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync('public/build/manifest.json', 'utf8'));

// Extract all Vue component paths and group by module
const vueFiles = Object.keys(manifest)
    .filter(k => k.startsWith('resources/js/views/Pages/') && k.endsWith('.vue'))
    .sort();

// Parse module/entity/component pattern
const moduleRoutes = {};
for (const filePath of vueFiles) {
    const relative = filePath.replace('resources/js/views/Pages/', '');
    const parts = relative.split('/');
    const module = parts[0];
    if (!moduleRoutes[module]) moduleRoutes[module] = [];
    moduleRoutes[module].push({ path: filePath, parts: parts.slice(1), relative });
}

// Convert PascalCase to kebab-case
function toKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Convert PascalCase words to route name
function toRouteName(moduleName, entityParts) {
    return moduleName + entityParts.join('');
}

// Generate route config for standard CRUD modules
function generateCrudRoutes(moduleName, entityName, basePath, importBase) {
    const routePrefix = moduleName + entityName;
    return `        {
            path: '${basePath}',
            name: '${routePrefix}',
            redirect: { name: '${routePrefix}List' },
            children: [
                {
                    path: '',
                    name: '${routePrefix}List',
                    component: () => import('@/views/Pages/${importBase}/Index.vue'),
                },
                {
                    path: 'create',
                    name: '${routePrefix}Create',
                    meta: { action: 'create', trans: 'global.create', label: '${toKebab(moduleName)}.${toKebab(entityName)}.${toKebab(entityName)}' },
                    component: () => import('@/views/Pages/${importBase}/Action.vue'),
                },
                {
                    path: ':uuid/edit',
                    name: '${routePrefix}Edit',
                    meta: { action: 'edit', trans: 'global.edit', label: '${toKebab(moduleName)}.${toKebab(entityName)}.${toKebab(entityName)}' },
                    component: () => import('@/views/Pages/${importBase}/Action.vue'),
                },
                {
                    path: ':uuid',
                    name: '${routePrefix}Show',
                    component: () => import('@/views/Pages/${importBase}/Show.vue'),
                },
            ],
        },`;
}

// Build complete routes
let appChildren = [];
let authChildren = [];
let guestChildren = [];

// Group files by module/entity to detect which have Action/Index/Show
for (const [module, files] of Object.entries(moduleRoutes)) {
    // Skip Layouts, Errors, Install, Product
    if (['Layouts', 'Errors', 'Install', 'Product'].includes(module)) continue;

    // Auth module goes to guest layout
    if (module === 'Auth') {
        for (const f of files) {
            const name = f.parts[0].replace('.vue', '');
            authChildren.push(`            { path: '${toKebab(name)}', name: '${name}', component: () => import('@/views/Pages/Auth/${name}.vue') },`);
        }
        continue;
    }

    // Dashboard is special
    if (module === 'Dashboard') {
        appChildren.push(`        {
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/Pages/Dashboard/Index.vue'),
        },`);
        continue;
    }

    // Notification is special
    if (module === 'Notification') {
        appChildren.push(`        {
            path: 'notifications',
            name: 'Notification',
            component: () => import('@/views/Pages/Notification/Index.vue'),
        },`);
        continue;
    }

    // Support is special
    if (module === 'Support') {
        appChildren.push(`        {
            path: 'support',
            name: 'Support',
            component: () => import('@/views/Pages/Support/Index.vue'),
        },`);
        continue;
    }

    // Detect entities within each module
    const entities = {};
    for (const f of files) {
        // Config is a sub-route pattern, skip for entity detection
        if (f.parts[0] === 'Config') {
            if (!entities['Config']) entities['Config'] = [];
            entities['Config'].push(f);
            continue;
        }

        // Direct module-level files (e.g., Student/Index.vue, Student/Basic.vue)
        if (f.parts.length === 1) {
            const name = f.parts[0].replace('.vue', '');
            if (!entities['_root']) entities['_root'] = [];
            entities['_root'].push(f);
            continue;
        }

        // Entity sub-directories
        const entity = f.parts[0];
        if (!entities[entity]) entities[entity] = [];
        entities[entity].push(f);
    }

    // Check if this module has standard CRUD entities
    for (const [entity, entityFiles] of Object.entries(entities)) {
        if (entity === '_root' || entity === 'Config') continue;

        const fileNames = entityFiles.map(f => f.parts[f.parts.length - 1].replace('.vue', ''));
        const hasIndex = fileNames.includes('Index');
        const hasAction = fileNames.includes('Action');
        const hasShow = fileNames.includes('Show');

        if (hasIndex && hasAction && hasShow) {
            // Standard CRUD route
            const basePath = `${toKebab(module)}/${toKebab(entity)}s`;
            appChildren.push(generateCrudRoutes(module, entity, basePath, `${module}/${entity}`));
        } else if (hasIndex) {
            // Index-only route
            appChildren.push(`        {
            path: '${toKebab(module)}/${toKebab(entity)}s',
            name: '${module}${entity}',
            component: () => import('@/views/Pages/${module}/${entity}/Index.vue'),
        },`);
        }
    }

    // Config routes
    if (entities['Config']) {
        appChildren.push(`        {
            path: '${toKebab(module)}/config',
            name: '${module}Config',
            component: () => import('@/views/Pages/${module}/Config/Index.vue'),
        },`);
    }
}

const routerContent = `import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/Layouts/App.vue'),
        children: [
${appChildren.join('\n')}
        ],
    },
    {
        path: '/auth',
        component: () => import('@/views/Layouts/Guest.vue'),
        children: [
${authChildren.join('\n')}
        ],
    },
    {
        path: '/setup',
        component: () => import('@/views/Layouts/Setup.vue'),
        children: [
            { path: '', name: 'Install', component: () => import('@/views/Pages/Install/Index.vue') },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Pages/Errors/404.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
`;

fs.writeFileSync('resources/js/router/index.js', routerContent);

// Count routes
const routeCount = appChildren.length + authChildren.length + 2;
console.log(`Created router with ~${routeCount} route entries`);
console.log(`  App children: ${appChildren.length}`);
console.log(`  Auth children: ${authChildren.length}`);
