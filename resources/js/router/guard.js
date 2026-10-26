import store from '../stores';

export function setupGuards(router) {
    router.beforeEach(async (to, from, next) => {
        // Allow error pages through
        if (to.path === '/error') return next();

        const belongsTo = to.matched.reduce((acc, r) => r.meta.belongsTo || acc, null);

        // Setup/Install check
        const requiresInstall = store.getters['config/requiresInstall'];
        if (requiresInstall && to.name !== 'Install') {
            return next({ name: 'Install' });
        }

        // Force redirect
        if (to.meta.forceRedirect) {
            return next({ name: to.meta.forceRedirect });
        }

        // Auth-required routes
        if (belongsTo === 'auth') {
            return authGuard(to, from, next);
        }

        // Guest routes (login, register)
        if (belongsTo === 'guest') {
            const isAuthenticated = store.getters['auth/isAuthenticated'];
            if (isAuthenticated) {
                const ref = to.query.ref || 'Dashboard';
                return next({ name: ref });
            }
            return next();
        }

        next();
    });
}

async function authGuard(to, from, next) {
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    // Not authenticated - redirect to login
    if (!isAuthenticated) {
        return next({ name: 'Login', query: { ref: to.fullPath } });
    }

    // Force password change
    if (store.getters['auth/forceChangePassword'] && to.name !== 'UserForceChangePassword') {
        return next({ name: 'UserForceChangePassword' });
    }

    // No team selected
    if (!store.getters['auth/currentTeamId'] && to.name !== 'TeamSelection') {
        return next({ name: 'TeamSelection' });
    }

    // License check
    const system = store.getters['config/system'];
    if (system && system.ac !== true && to.name !== 'License') {
        return next({ name: 'License' });
    }

    // Super admin check
    if (to.meta.superAdmin && !store.getters['auth/isSuperAdmin']) {
        return next({ name: 'Error403' });
    }

    // Role check
    if (to.meta.roles) {
        const userRoles = store.getters['auth/roles'] || [];
        const hasRole = to.meta.roles.some(r => userRoles.includes(r));
        if (!hasRole) return next({ name: 'Error403' });
    }

    // Role exclusion check
    if (to.meta.rolesExcept) {
        const userRoles = store.getters['auth/roles'] || [];
        const hasExcludedRole = to.meta.rolesExcept.some(r => userRoles.includes(r));
        if (hasExcludedRole) return next({ name: 'Error403' });
    }

    // Permission check
    if (to.meta.permissions) {
        const check = to.meta.allPermissions ? 'hasAllPermissions' : 'hasAnyPermission';
        if (!store.getters[`auth/${check}`](to.meta.permissions)) {
            return next({ name: 'Error403' });
        }
    }

    // Feature flag check
    if (to.meta.feature) {
        const isEnabled = store.getters['config/isFeatureEnabled'](to.meta.feature);
        if (!isEnabled) return next({ name: 'Error404' });
    }

    next();
}
