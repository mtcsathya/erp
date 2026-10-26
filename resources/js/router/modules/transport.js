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
    crud('transport/stoppages', 'TransportStoppage', 'Transport/Stoppage'),
    crud('transport/routes', 'TransportRoute', 'Transport/Route'),
    crud('transport/circles', 'TransportCircle', 'Transport/Circle'),
    crud('transport/fees', 'TransportFee', 'Transport/Fee'),
    { path: 'transport/vehicles', name: 'TransportVehicle', redirect: { name: 'TransportVehicleList' }, children: [
        { path: '', name: 'TransportVehicleList', component: () => import('@/views/Pages/Transport/Vehicle/Index.vue') },
        { path: 'create', name: 'TransportVehicleCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Transport/Vehicle/Action.vue') },
        { path: ':uuid/edit', name: 'TransportVehicleEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Transport/Vehicle/Action.vue') },
        { path: ':uuid', name: 'TransportVehicleShow', component: () => import('@/views/Pages/Transport/Vehicle/Show.vue') },
        { path: ':uuid/general', name: 'TransportVehicleGeneral', component: () => import('@/views/Pages/Transport/Vehicle/General.vue') },
    ]},
    // Vehicle sub-resources
    crud('transport/vehicle/incharges', 'TransportVehicleIncharge', 'Transport/Vehicle/Incharge'),
    crud('transport/vehicle/documents', 'TransportVehicleDocument', 'Transport/Vehicle/Document'),
    crud('transport/vehicle/trip-records', 'TransportVehicleTripRecord', 'Transport/Vehicle/TripRecord'),
    crud('transport/vehicle/fuel-records', 'TransportVehicleFuelRecord', 'Transport/Vehicle/FuelRecord'),
    crud('transport/vehicle/service-records', 'TransportVehicleServiceRecord', 'Transport/Vehicle/ServiceRecord'),
    crud('transport/vehicle/expense-records', 'TransportVehicleExpenseRecord', 'Transport/Vehicle/ExpenseRecord'),
    crud('transport/vehicle/case-records', 'TransportVehicleCaseRecord', 'Transport/Vehicle/CaseRecord'),
    // Vehicle detail nested pages
    { path: 'transport/vehicles/:uuid/detail/documents', name: 'TransportVehicleDetailDocument', component: () => import('@/views/Pages/Transport/Vehicle/Detail/Document/Index.vue') },
    { path: 'transport/vehicles/:uuid/detail/incharges', name: 'TransportVehicleDetailIncharge', component: () => import('@/views/Pages/Transport/Vehicle/Detail/Incharge/Index.vue') },
    { path: 'transport/vehicles/:uuid/detail/trip-records', name: 'TransportVehicleDetailTripRecord', component: () => import('@/views/Pages/Transport/Vehicle/Detail/TripRecord/Index.vue') },
    { path: 'transport/vehicles/:uuid/detail/fuel-records', name: 'TransportVehicleDetailFuelRecord', component: () => import('@/views/Pages/Transport/Vehicle/Detail/FuelRecord/Index.vue') },
    { path: 'transport/vehicles/:uuid/detail/service-records', name: 'TransportVehicleDetailServiceRecord', component: () => import('@/views/Pages/Transport/Vehicle/Detail/ServiceRecord/Index.vue') },
    { path: 'transport/vehicles/:uuid/detail/expense-records', name: 'TransportVehicleDetailExpenseRecord', component: () => import('@/views/Pages/Transport/Vehicle/Detail/ExpenseRecord/Index.vue') },
    { path: 'transport/vehicles/:uuid/detail/case-records', name: 'TransportVehicleDetailCaseRecord', component: () => import('@/views/Pages/Transport/Vehicle/Detail/CaseRecord/Index.vue') },
    // Vehicle config
    crud('transport/vehicle/config/document-types', 'TransportVehicleConfigDocumentType', 'Transport/Vehicle/Config/DocumentType'),
    crud('transport/vehicle/config/expense-types', 'TransportVehicleConfigExpenseType', 'Transport/Vehicle/Config/ExpenseType'),
    { path: 'transport/vehicle/config', name: 'TransportVehicleConfig', redirect: { name: 'TransportVehicleConfigGeneral' }, children: [
        { path: 'general', name: 'TransportVehicleConfigGeneral', component: () => import('@/views/Pages/Transport/Vehicle/Config/General.vue') },
    ]},
    // Reports
    { path: 'transport/reports', name: 'TransportReport', component: () => import('@/views/Pages/Transport/Report/Index.vue') },
    { path: 'transport/reports/batch-wise-route', name: 'TransportReportBatchWiseRoute', component: () => import('@/views/Pages/Transport/Report/BatchWiseRoute/Index.vue') },
    { path: 'transport/reports/route-wise-student', name: 'TransportReportRouteWiseStudent', component: () => import('@/views/Pages/Transport/Report/RouteWiseStudent/Index.vue') },
    { path: 'transport/config', name: 'TransportConfig', redirect: { name: 'TransportConfigGeneral' }, children: [
        { path: 'general', name: 'TransportConfigGeneral', component: () => import('@/views/Pages/Transport/Config/General.vue') },
    ]},
];
