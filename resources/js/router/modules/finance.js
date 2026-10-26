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
    crud('finance/payment-methods', 'FinancePaymentMethod', 'Finance/PaymentMethod'),
    crud('finance/fee-groups', 'FinanceFeeGroup', 'Finance/FeeGroup'),
    crud('finance/fee-heads', 'FinanceFeeHead', 'Finance/FeeHead'),
    crud('finance/fee-components', 'FinanceFeeComponent', 'Finance/FeeComponent'),
    crud('finance/fee-concessions', 'FinanceFeeConcession', 'Finance/FeeConcession'),
    crud('finance/fee-structures', 'FinanceFeeStructure', 'Finance/FeeStructure'),
    crud('finance/fee-structure-components', 'FinanceFeeStructureComponent', 'Finance/FeeStructureComponent'),
    crud('finance/ledger-types', 'FinanceLedgerType', 'Finance/LedgerType'),
    crud('finance/ledgers', 'FinanceLedger', 'Finance/Ledger'),
    crud('finance/taxes', 'FinanceTax', 'Finance/Tax'),
    crud('finance/transactions', 'FinanceTransaction', 'Finance/Transaction'),
    crud('finance/receipts', 'FinanceReceipt', 'Finance/Receipt'),
    crud('finance/day-closures', 'FinanceDayClosure', 'Finance/DayClosure'),
    // Reports
    { path: 'finance/reports', name: 'FinanceReport', component: () => import('@/views/Pages/Finance/Report/Index.vue') },
    { path: 'finance/reports/daybook', name: 'FinanceReportDayBook', component: () => import('@/views/Pages/Finance/Report/DayBook/Index.vue') },
    { path: 'finance/reports/fee-summary', name: 'FinanceReportFeeSummary', component: () => import('@/views/Pages/Finance/Report/FeeSummary/Index.vue') },
    { path: 'finance/reports/fee-concession', name: 'FinanceReportFeeConcession', component: () => import('@/views/Pages/Finance/Report/FeeConcession/Index.vue') },
    { path: 'finance/reports/fee-concession-summary', name: 'FinanceReportFeeConcessionSummary', component: () => import('@/views/Pages/Finance/Report/FeeConcessionSummary/Index.vue') },
    { path: 'finance/reports/fee-due', name: 'FinanceReportFeeDue', component: () => import('@/views/Pages/Finance/Report/FeeDue/Index.vue') },
    { path: 'finance/reports/installment-wise-fee-due', name: 'FinanceReportInstallmentWiseFeeDue', component: () => import('@/views/Pages/Finance/Report/InstallmentWiseFeeDue/Index.vue') },
    { path: 'finance/reports/fee-head', name: 'FinanceReportFeeHead', component: () => import('@/views/Pages/Finance/Report/FeeHead/Index.vue') },
    { path: 'finance/reports/fee-payment', name: 'FinanceReportFeePayment', component: () => import('@/views/Pages/Finance/Report/FeePayment/Index.vue') },
    { path: 'finance/reports/online-fee-payment', name: 'FinanceReportOnlineFeePayment', component: () => import('@/views/Pages/Finance/Report/OnlineFeePayment/Index.vue') },
    { path: 'finance/reports/head-wise-fee-payment', name: 'FinanceReportHeadWiseFeePayment', component: () => import('@/views/Pages/Finance/Report/HeadWiseFeePayment/Index.vue') },
    { path: 'finance/reports/payment-method-wise-fee-payment', name: 'FinanceReportPaymentMethodWiseFeePayment', component: () => import('@/views/Pages/Finance/Report/PaymentMethodWiseFeePayment/Index.vue') },
    { path: 'finance/reports/bank-transfer', name: 'FinanceReportBankTransfer', component: () => import('@/views/Pages/Finance/Report/BankTransfer/Index.vue') },
    { path: 'finance/reports/fee-refund', name: 'FinanceReportFeeRefund', component: () => import('@/views/Pages/Finance/Report/FeeRefund/Index.vue') },
    // Config
    { path: 'finance/config', name: 'FinanceConfig', redirect: { name: 'FinanceConfigGeneral' }, children: [
        { path: 'general', name: 'FinanceConfigGeneral', component: () => import('@/views/Pages/Finance/Config/General.vue') },
        { path: 'payment-gateway', name: 'FinanceConfigPaymentGateway', component: () => import('@/views/Pages/Finance/Config/PaymentGateway.vue') },
    ]},
];
