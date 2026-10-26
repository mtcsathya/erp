/**
 * Generate standard CRUD routes for a module entity.
 *
 * @param {string} path - URL path (e.g., 'academic/departments')
 * @param {string} name - Route name prefix (e.g., 'AcademicDepartment')
 * @param {string} importPath - Component import path under Pages/ (e.g., 'Academic/Department')
 * @param {object} opts - Options: { permissions, redirect, extra, hasAssign, hasDuplicate, hasWizard, hasEdit }
 */
export function crudRoutes(path, name, importPath, opts = {}) {
    const {
        permissions = {},
        redirect = `${name}List`,
        extra = [],
        hasAssign = false,
        hasDuplicate = true,
        hasWizard = false,
        hasEdit = false,
    } = opts;

    const children = [
        {
            path: '',
            name: `${name}List`,
            meta: { trans: 'global.list', label: path, ...permissions.list },
            component: () => import(`@/views/Pages/${importPath}/Index.vue`),
        },
        {
            path: 'create',
            name: `${name}Create`,
            meta: { type: 'create', action: 'create', trans: 'global.add', label: path, ...permissions.create },
            component: () => import(`@/views/Pages/${importPath}/Action.vue`),
        },
        {
            path: ':uuid/edit',
            name: `${name}Edit`,
            meta: { type: 'edit', action: 'update', trans: 'global.edit', label: path, ...permissions.edit },
            component: () => import(`@/views/Pages/${importPath}/Action.vue`),
        },
        {
            path: ':uuid',
            name: `${name}Show`,
            meta: { trans: 'global.detail', label: path, ...permissions.show },
            component: () => import(`@/views/Pages/${importPath}/Show.vue`),
        },
    ];

    if (hasDuplicate) {
        children.push({
            path: ':uuid/duplicate',
            name: `${name}Duplicate`,
            meta: { type: 'create', action: 'create', trans: 'global.add', label: path },
            component: () => import(`@/views/Pages/${importPath}/Action.vue`),
        });
    }

    if (hasAssign) {
        children.push({
            path: 'assign',
            name: `${name}Assign`,
            meta: { trans: 'global.assign', label: path },
            component: () => import(`@/views/Pages/${importPath}/Assign.vue`),
        });
    }

    if (hasWizard) {
        children.push({
            path: 'wizard',
            name: `${name}Wizard`,
            component: () => import(`@/views/Pages/${importPath}/Wizard.vue`),
        });
    }

    children.push(...extra);

    return {
        path,
        name,
        redirect: { name: redirect },
        children,
    };
}

/**
 * Generate config routes for a module.
 */
export function configRoutes(path, name, importPath, tabs = ['General']) {
    const children = tabs.map(tab => ({
        path: tab.toLowerCase().replace(/\s+/g, '-'),
        name: `${name}${tab.replace(/\s+/g, '')}`,
        component: () => import(`@/views/Pages/${importPath}/Config/${tab.replace(/\s+/g, '')}.vue`),
    }));

    return {
        path,
        name,
        redirect: { name: `${name}${tabs[0].replace(/\s+/g, '')}` },
        children,
    };
}
