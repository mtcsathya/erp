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
    crud('library/books', 'LibraryBook', 'Library/Book'),
    crud('library/book-additions', 'LibraryBookAddition', 'Library/BookAddition'),
    { path: 'library/book-copies', name: 'LibraryBookCopy', component: () => import('@/views/Pages/Library/BookCopy/Index.vue') },
    { path: 'library/book-labels', name: 'LibraryBookLabel', component: () => import('@/views/Pages/Library/BookLabel/Print.vue') },
    { path: 'library/transactions', name: 'LibraryTransaction', redirect: { name: 'LibraryTransactionList' }, children: [
        { path: '', name: 'LibraryTransactionList', component: () => import('@/views/Pages/Library/Transaction/Index.vue') },
        { path: 'create', name: 'LibraryTransactionCreate', meta: { action: 'create' }, component: () => import('@/views/Pages/Library/Transaction/Action.vue') },
        { path: ':uuid/edit', name: 'LibraryTransactionEdit', meta: { action: 'edit' }, component: () => import('@/views/Pages/Library/Transaction/Action.vue') },
        { path: ':uuid', name: 'LibraryTransactionShow', component: () => import('@/views/Pages/Library/Transaction/Show.vue') },
    ]},
    { path: 'library/book-wise-transactions', name: 'LibraryBookWiseTransaction', component: () => import('@/views/Pages/Library/BookWiseTransaction/Index.vue') },
    { path: 'library/reports', name: 'LibraryReport', component: () => import('@/views/Pages/Library/Report/Index.vue') },
    { path: 'library/reports/top-borrower', name: 'LibraryReportTopBorrower', component: () => import('@/views/Pages/Library/Report/TopBorrower/Index.vue') },
    { path: 'library/reports/top-borrowed-book', name: 'LibraryReportTopBorrowedBook', component: () => import('@/views/Pages/Library/Report/TopBorrowedBook/Index.vue') },
    { path: 'library/config', name: 'LibraryConfig', redirect: { name: 'LibraryConfigGeneral' }, children: [
        { path: 'general', name: 'LibraryConfigGeneral', component: () => import('@/views/Pages/Library/Config/General.vue') },
    ]},
];
