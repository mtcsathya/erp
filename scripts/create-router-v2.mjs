import fs from 'fs';
import path from 'path';

const manifest = JSON.parse(fs.readFileSync('public/build/manifest.json', 'utf8'));

// Get all Vue component paths from manifest
const vueFiles = Object.keys(manifest)
    .filter(k => k.startsWith('resources/js/views/Pages/') && k.endsWith('.vue'))
    .sort();

// Convert PascalCase to kebab-case
function toKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Check if a file exists in the manifest
function manifestHas(filePath) {
    return vueFiles.includes(filePath);
}

// Build a set of entities that have standard CRUD (Action.vue + Index.vue + Show.vue)
// by scanning the manifest for patterns
function findCrudEntities() {
    const entities = [];

    // Group files by their directory
    const dirs = {};
    for (const f of vueFiles) {
        const rel = f.replace('resources/js/views/Pages/', '');
        const dir = path.dirname(rel);
        const file = path.basename(rel, '.vue');
        if (!dirs[dir]) dirs[dir] = [];
        dirs[dir].push(file);
    }

    for (const [dir, files] of Object.entries(dirs)) {
        const hasIndex = files.includes('Index');
        const hasAction = files.includes('Action');
        const hasShow = files.includes('Show');

        if (hasIndex && hasAction && hasShow) {
            entities.push({
                dir,
                files,
                type: 'crud',
            });
        } else if (hasIndex && !hasAction && !hasShow) {
            entities.push({
                dir,
                files,
                type: 'index-only',
            });
        } else if (hasIndex || hasAction || hasShow) {
            entities.push({
                dir,
                files,
                type: 'partial',
            });
        }
    }

    return entities;
}

const entities = findCrudEntities();

// Build routes
const appRoutes = [];
const authRoutes = [];
const processedDirs = new Set();

// Skip these - handled specially
const skipDirs = ['Layouts', 'Errors'];

// Auth pages
for (const e of entities) {
    if (e.dir.startsWith('Auth')) {
        const parts = e.dir.split('/');
        if (parts.length === 1) {
            // Direct Auth files
            for (const f of e.files) {
                authRoutes.push(`            { path: '${toKebab(f)}', name: '${f}', component: () => import('@/views/Pages/Auth/${f}.vue') },`);
            }
        }
        processedDirs.add(e.dir);
    }
}

// Also add individual Auth files not in sub-directories
const authFiles = vueFiles.filter(f => {
    const rel = f.replace('resources/js/views/Pages/', '');
    return rel.startsWith('Auth/') && !rel.includes('/', 5);
});
const authNames = new Set();
for (const f of authFiles) {
    const name = path.basename(f, '.vue');
    if (!authNames.has(name)) {
        authNames.add(name);
        // Check if already added
        if (!authRoutes.some(r => r.includes(`name: '${name}'`))) {
            authRoutes.push(`            { path: '${toKebab(name)}', name: '${name}', component: () => import('@/views/Pages/Auth/${name}.vue') },`);
        }
    }
}

// Special standalone routes
const specialRoutes = {
    'Dashboard': { path: 'dashboard', component: 'Dashboard/Index.vue' },
    'Notification': { path: 'notifications', component: 'Notification/Index.vue' },
    'Support': { path: 'support', component: 'Support/Index.vue' },
    'Attendance/Assistant': { path: 'attendance/assistant', component: 'Attendance/Assistant.vue', name: 'AttendanceAssistant' },
    'Attendance/QrCode': { path: 'attendance/qr-code', component: 'Attendance/QrCode.vue', name: 'AttendanceQrCode' },
};

for (const [key, cfg] of Object.entries(specialRoutes)) {
    const name = cfg.name || key.replace('/', '');
    if (manifestHas(`resources/js/views/Pages/${cfg.component}`)) {
        appRoutes.push(`        {
            path: '${cfg.path}',
            name: '${name}',
            component: () => import('@/views/Pages/${cfg.component}'),
        },`);
    }
    processedDirs.add(key.split('/')[0]);
}

// Process CRUD entities
for (const e of entities) {
    const topModule = e.dir.split('/')[0];
    if (skipDirs.includes(topModule) || processedDirs.has(e.dir)) continue;
    if (topModule === 'Auth' || topModule === 'Layouts' || topModule === 'Install' || topModule === 'Product') continue;

    // Convert dir path to route path and name
    const dirParts = e.dir.split('/');
    const routeName = dirParts.join('');
    const routePath = dirParts.map(p => toKebab(p)).join('/');

    // Pluralize the last segment for the URL
    const lastSegment = toKebab(dirParts[dirParts.length - 1]);
    const routePathPlural = dirParts.slice(0, -1).map(p => toKebab(p)).concat(lastSegment + 's').join('/');

    if (e.type === 'crud') {
        const importBase = e.dir;
        appRoutes.push(`        {
            path: '${routePathPlural}',
            name: '${routeName}',
            redirect: { name: '${routeName}List' },
            children: [
                {
                    path: '',
                    name: '${routeName}List',
                    component: () => import('@/views/Pages/${importBase}/Index.vue'),
                },
                {
                    path: 'create',
                    name: '${routeName}Create',
                    meta: { action: 'create' },
                    component: () => import('@/views/Pages/${importBase}/Action.vue'),
                },
                {
                    path: ':uuid/edit',
                    name: '${routeName}Edit',
                    meta: { action: 'edit' },
                    component: () => import('@/views/Pages/${importBase}/Action.vue'),
                },
                {
                    path: ':uuid',
                    name: '${routeName}Show',
                    component: () => import('@/views/Pages/${importBase}/Show.vue'),
                },
            ],
        },`);
    } else if (e.type === 'index-only') {
        appRoutes.push(`        {
            path: '${routePathPlural}',
            name: '${routeName}',
            component: () => import('@/views/Pages/${e.dir}/Index.vue'),
        },`);
    }

    // Also handle standalone files in same directory (Edit.vue, Wizard.vue, etc.)
    for (const f of e.files) {
        if (['Index', 'Action', 'Show', 'General'].includes(f)) continue;
        const compPath = `resources/js/views/Pages/${e.dir}/${f}.vue`;
        if (manifestHas(compPath)) {
            appRoutes.push(`        {
            path: '${routePathPlural}/${toKebab(f)}',
            name: '${routeName}${f}',
            component: () => import('@/views/Pages/${e.dir}/${f}.vue'),
        },`);
        }
    }
}

// Config routes for modules that have Config subdirectories
const configDirs = vueFiles
    .filter(f => f.includes('/Config/Index.vue'))
    .map(f => {
        const rel = f.replace('resources/js/views/Pages/', '').replace('/Config/Index.vue', '');
        return rel;
    })
    .filter(d => !['Auth', 'Layouts'].includes(d));

for (const dir of configDirs) {
    const routeName = dir.replace(/\//g, '') + 'Config';
    const routePath = dir.split('/').map(p => toKebab(p)).join('/') + '/config';

    // Skip if already covered by a CRUD entity
    if (appRoutes.some(r => r.includes(`name: '${routeName}'`))) continue;

    appRoutes.push(`        {
            path: '${routePath}',
            name: '${routeName}',
            component: () => import('@/views/Pages/${dir}/Config/Index.vue'),
        },`);
}

const routerContent = `import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/Layouts/App.vue'),
        children: [
${appRoutes.join('\n')}
        ],
    },
    {
        path: '/auth',
        component: () => import('@/views/Layouts/Guest.vue'),
        children: [
${authRoutes.join('\n')}
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
console.log(`Created router with ${appRoutes.length} app routes + ${authRoutes.length} auth routes`);
