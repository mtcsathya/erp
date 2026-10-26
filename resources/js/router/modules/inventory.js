function crud(path, name, imp) {
    return { path, name, redirect: { name: `${name}List` }, children: [
        { path: '', name: `${name}List`, component: () => import(`../../views/Pages/${imp}/Index.vue`) },
        { path: 'create', name: `${name}Create`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid/edit', name: `${name}Edit`, meta: { action: 'edit' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid/duplicate', name: `${name}Duplicate`, meta: { action: 'create' }, component: () => import(`../../views/Pages/${imp}/Action.vue`) },
        { path: ':uuid', name: `${name}Show`, component: () => import(`../../views/Pages/${imp}/Show.vue`) },
    ]};
}
export default [
    crud('inventory/incharges', 'InventoryIncharge', 'Inventory/Incharge'),
    { path: 'inventory/vendors', name: 'InventoryVendor', redirect: { name: 'InventoryVendorList' }, children: [
        { path: '', name: 'InventoryVendorList', component: () => import('@/views/Pages/Inventory/Vendor/Index.vue') },
        { path: 'create', name: 'InventoryVendorCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Inventory/Vendor/Action.vue') },
        { path: ':uuid/edit', name: 'InventoryVendorEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Inventory/Vendor/Action.vue') },
        { path: ':uuid', name: 'InventoryVendorShow', component: () => import('@/views/Pages/Inventory/Vendor/Show.vue') },
        { path: ':uuid/statement', name: 'InventoryVendorStatement', component: () => import('@/views/Pages/Inventory/Vendor/Statement.vue') },
    ]},
    crud('inventory/stock-categories', 'InventoryStockCategory', 'Inventory/StockCategory'),
    crud('inventory/stock-items', 'InventoryStockItem', 'Inventory/StockItem'),
    { path: 'inventory/stock-item-copies', name: 'InventoryStockItemCopy', component: () => import('@/views/Pages/Inventory/StockItemCopy/Index.vue') },
    { path: 'inventory/stock-item-labels', name: 'InventoryStockItemLabel', component: () => import('@/views/Pages/Inventory/StockItemLabel/Print.vue') },
    crud('inventory/stock-requisitions', 'InventoryStockRequisition', 'Inventory/StockRequisition'),
    crud('inventory/stock-purchases', 'InventoryStockPurchase', 'Inventory/StockPurchase'),
    crud('inventory/stock-returns', 'InventoryStockReturn', 'Inventory/StockReturn'),
    crud('inventory/stock-transfers', 'InventoryStockTransfer', 'Inventory/StockTransfer'),
    crud('inventory/stock-adjustments', 'InventoryStockAdjustment', 'Inventory/StockAdjustment'),
    { path: 'inventories', name: 'Inventory', redirect: { name: 'InventoryList' }, children: [
        { path: '', name: 'InventoryList', component: () => import('@/views/Pages/Inventory/Index.vue') },
        { path: 'create', name: 'InventoryCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Inventory/Action.vue') },
        { path: ':uuid/edit', name: 'InventoryEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Inventory/Action.vue') },
        { path: ':uuid', name: 'InventoryShow', component: () => import('@/views/Pages/Inventory/Show.vue') },
    ]},
    { path: 'inventory/reports', name: 'InventoryReport', component: () => import('@/views/Pages/Inventory/Report/Index.vue') },
    { path: 'inventory/reports/item-summary', name: 'InventoryReportItemSummary', component: () => import('@/views/Pages/Inventory/Report/ItemSummary/Index.vue') },
    { path: 'inventory/config', name: 'InventoryConfig', redirect: { name: 'InventoryConfigGeneral' }, children: [
        { path: 'general', name: 'InventoryConfigGeneral', component: () => import('@/views/Pages/Inventory/Config/General.vue') },
    ]},
];
