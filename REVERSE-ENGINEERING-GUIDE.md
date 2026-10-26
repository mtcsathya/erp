# InstiKit Premium v5.5 - Frontend Reverse Engineering Guide

## Application Overview

**App**: InstiKit Premium - School ERP Solution  
**Backend**: Laravel 12 (PHP 8.2+) - fully readable  
**Frontend**: Vue 3 SPA - source code missing, only minified Vite build output exists  
**Build Tool**: Vite with `laravel-vite-plugin`  
**CSS**: Tailwind CSS 4  
**State Management**: Vuex 4  
**Routing**: Vue Router 4  
**Entry Point**: `resources/views/app.blade.php` → `@vite(['resources/js/app.js'])` → `<div id="root"><router-view></router-view></div>`

---

## What Exists

| Location | Status | Description |
|----------|--------|-------------|
| `app/` | Readable | 2,960 PHP files (Controllers, Models, Services, etc.) |
| `routes/` | Readable | 78 route files (17 core + 31 module + 18 export + site + channels) |
| `resources/views/` | Readable | 196 Blade templates |
| `public/build/assets/` | **Minified** | 1,937 compiled JS/CSS files (~21MB) |
| `public/build/manifest.json` | Readable | Vite manifest - 1,038 entries mapping source paths to compiled files |
| `resources/js/` | **MISSING** | Vue 3 source code - needs to be rebuilt |
| `package.json` | **MISSING** | Needs to be recreated |
| `vite.config.js` | **MISSING** | Needs to be recreated |

---

## Phase 0: Recreate Project Config Files

### 0.1 Create `package.json`

```json
{
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.4",
    "vue-router": "^4.3",
    "vuex": "^4.1",
    "axios": "^1.6",
    "lodash": "^4.17",
    "sweetalert2": "^11.10",
    "chart.js": "^4.4",
    "vue-chartjs": "^5.3",
    "katex": "^0.16",
    "quill": "^1.3.7",
    "@vueup/vue-quill": "^1.2",
    "vuedraggable": "^4.1",
    "floating-vue": "^5.2",
    "highlight.js": "^11.9",
    "uuid": "^9.0",
    "@fortawesome/fontawesome-free": "^6.5",
    "@codemirror/lang-css": "^6.2",
    "@codemirror/lang-html": "^6.4",
    "@codemirror/lang-javascript": "^6.2",
    "@codemirror/lang-json": "^6.0",
    "@codemirror/lang-markdown": "^6.2",
    "@codemirror/lang-php": "^6.0",
    "@codemirror/lang-python": "^6.1",
    "@codemirror/lang-sql": "^6.6",
    "@codemirror/lang-xml": "^6.1",
    "@codemirror/lang-yaml": "^6.0",
    "@codemirror/legacy-modes": "^6.3"
  },
  "devDependencies": {
    "vite": "^6.0",
    "@vitejs/plugin-vue": "^5.0",
    "laravel-vite-plugin": "^1.2",
    "@tailwindcss/postcss": "^4.0",
    "postcss": "^8.4",
    "autoprefixer": "^10.4"
  }
}
```

> **Note**: Tailwind CSS 4 replaces the `tailwindcss` package with `@tailwindcss/postcss` as a PostCSS plugin. The standalone `tailwindcss` npm package is no longer needed in devDependencies.

### 0.2 Create `vite.config.js`

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
```

### 0.3 Create CSS entry with Tailwind 4

> **Tailwind CSS 4 uses a CSS-first configuration approach.** Instead of `tailwind.config.js`, you configure Tailwind via CSS directives. The old JS config still works via `@config` but the canonical v4 way is CSS-based.

Create `resources/css/app.css`:

```css
@import "tailwindcss";

@theme {
    --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;

    --color-dark-header: #1a1a2e;
    --color-dark-sidebar: #16213e;
    --color-dark-body: #0f3460;
    --color-dark-card: #1a1a2e;
}
```

If you prefer backward compatibility with the v3-style JS config, you can still create a `tailwind.config.js` and reference it:

```css
@import "tailwindcss";
@config "../../tailwind.config.js";
```

```js
// tailwind.config.js (optional, for v3 compatibility)
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dark-header': '#1a1a2e',
                'dark-sidebar': '#16213e',
                'dark-body': '#0f3460',
                'dark-card': '#1a1a2e',
            },
        },
    },
    plugins: [],
};
```

### 0.4 Create `postcss.config.js`

```js
export default {
    plugins: {
        '@tailwindcss/postcss': {},
    },
};
```

---

## Phase 1: Create Directory Structure

### 1.1 Run this Node.js script to create all 828 Vue component stubs

Save as `scripts/create-stubs.mjs` and run with `node scripts/create-stubs.mjs`:

```js
import fs from 'fs';
import path from 'path';

const manifest = JSON.parse(fs.readFileSync('public/build/manifest.json', 'utf8'));

// Extract all Vue component paths
const vueFiles = Object.keys(manifest)
    .filter(k => k.startsWith('resources/js/') && k.endsWith('.vue'))
    .sort();

console.log(`Found ${vueFiles.length} Vue components`);

for (const filePath of vueFiles) {
    const compiledFile = manifest[filePath].file;
    const dir = path.dirname(filePath);
    const componentName = path.basename(filePath, '.vue');

    // Create directory
    fs.mkdirSync(dir, { recursive: true });

    // Create stub Vue SFC
    const stub = `<template>
  <!-- TODO: Reconstruct template from ${compiledFile} -->
  <div>
    <h1>${componentName}</h1>
  </div>
</template>

<script setup>
// Compiled from: ${compiledFile}
// Manifest key: ${filePath}
</script>
`;

    fs.writeFileSync(filePath, stub);
    console.log(`Created: ${filePath}`);
}

console.log(`\nDone! Created ${vueFiles.length} Vue component stubs.`);
```

### 1.2 Complete Directory Tree (828 Vue Components across 49 Modules)

```
resources/js/
├── views/
│   ├── Layouts/
│   │   ├── App.vue
│   │   ├── Blank.vue
│   │   ├── Empty.vue
│   │   ├── Error.vue
│   │   ├── Guest.vue
│   │   ├── Setup.vue
│   │   └── User.vue
│   └── Pages/
│       ├── Academic/ (77 components)
│       │   ├── Batch/ (Action, Index, Show)
│       │   ├── BatchIncharge/ (Action, Assign, Index, Show)
│       │   ├── BookList/ (Action, Index, Show)
│       │   ├── Certificate/ (Action, Index, Show)
│       │   ├── CertificateTemplate/ (Action, Index, Show)
│       │   ├── ClassTiming/ (Action, Index, Show)
│       │   ├── Config/ (General, Index)
│       │   ├── Course/ (Action, Index, Show)
│       │   ├── CourseIncharge/ (Action, Assign, Index, Show)
│       │   ├── Department/ (Action, Index, Show)
│       │   ├── DepartmentIncharge/ (Action, Assign, Index, Show)
│       │   ├── Division/ (Action, Index, Show)
│       │   ├── DivisionIncharge/ (Action, Assign, Index, Show)
│       │   ├── EnrollmentSeat/ (Action, Index, Show)
│       │   ├── IdCard/ (Print)
│       │   ├── IdCardTemplate/ (Action, Index, Show)
│       │   ├── Period/ (Action, Index, Show)
│       │   ├── Program/ (Action, Index, Show)
│       │   ├── ProgramIncharge/ (Action, Assign, Index, Show)
│       │   ├── ProgramType/ (Action, Index, Show)
│       │   ├── Session/ (Action, Index, Show)
│       │   ├── Subject/ (Action, Index, Show)
│       │   ├── SubjectIncharge/ (Action, Assign, Index, Show)
│       │   └── Timetable/ (Action, Allocation, Index, Show, Teacher/Index)
│       ├── Activity/ (8 components)
│       │   ├── Config/ (General, Index)
│       │   └── Trip/ (Action, General, Index, Show, Media/Index, Participant/Index)
│       ├── Approval/ (10 components) ★ NEW
│       │   ├── Config/ (General, Index)
│       │   ├── Request/ (Action, Index, Pending, Processed, Show)
│       │   └── Type/ (Action, Index, Show)
│       ├── Asset/ (9 components)
│       │   └── Building/ (Block/, Floor/, Room/ - each with Action, Index, Show)
│       ├── Attendance/ (2 components)
│       │   ├── Assistant.vue
│       │   └── QrCode.vue
│       ├── Auth/ (8 components)
│       │   ├── EmailOtp.vue ★ NEW
│       │   ├── EmailRequest.vue
│       │   ├── EmailVerification.vue
│       │   ├── FailedLoginAttempt.vue
│       │   ├── Login.vue
│       │   ├── Password.vue
│       │   ├── Register.vue
│       │   └── SMSOtp.vue ★ NEW
│       ├── Blog/ (6 components)
│       │   ├── Action, Edit, Index, Show
│       │   └── Config/ (General, Index)
│       ├── Calendar/ (9 components)
│       │   ├── Celebration/ (Index)
│       │   ├── Config/ (General, Index)
│       │   ├── Event/ (Action, Index, Show)
│       │   └── Holiday/ (Action, Index, Show)
│       ├── Chat/ (2 components)
│       │   ├── Index.vue
│       │   └── Message.vue
│       ├── Communication/ (17 components)
│       │   ├── Announcement/ (Action, Index, Show)
│       │   ├── Config/ (General, Index)
│       │   ├── Email/ (Action, Index, Show)
│       │   ├── PushMessage/ (Action, Index, Show) ★ NEW
│       │   ├── SMS/ (Action, Index, Show)
│       │   └── WhatsApp/ (Action, Index, Show) ★ NEW
│       ├── Config/ (23 components)
│       │   ├── Asset/ (Index)
│       │   ├── Auth/ (Index)
│       │   ├── Chat/ (Index)
│       │   ├── Feature/ (Index)
│       │   ├── General/ (Index)
│       │   ├── Locale/ (Action, Index)
│       │   ├── Mail/ (Index)
│       │   ├── MailTemplate/ (Action, Index, Show)
│       │   ├── Module/ (Index)
│       │   ├── Notification/ (Index)
│       │   ├── PushNotificationTemplate/ (Action, Index)
│       │   ├── SMS/ (Index)
│       │   ├── SMSTemplate/ (Action, Index)
│       │   ├── SocialNetwork/ (Index)
│       │   ├── System/ (Index)
│       │   ├── WhatsApp/ (Index) ★ NEW
│       │   └── WhatsAppTemplate/ (Action, Index) ★ NEW
│       ├── Contact/ (15 components)
│       │   ├── Action, Basic, Contact, EditBasic, EditContact, EditLogin, EditPhoto, Index, Login, Show
│       │   └── Config/ (DocumentType/ - Action, Index, Show; General, Index) ★ NEW
│       ├── CustomField/ (3 components)
│       │   ├── Action, Index, Show
│       ├── Dashboard/ (1 component)
│       │   └── Index.vue
│       ├── Device/ (3 components)
│       │   ├── Action, Index, Show
│       ├── Discipline/ (5 components)
│       │   ├── Config/ (General, Index)
│       │   └── Incident/ (Action, Index, Show)
│       ├── Employee/ (102 components)
│       │   ├── Account/ (Action, Index, Show)
│       │   ├── Accounts/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── Action, Basic, Contact, EditBasic, EditContact, EditLogin, EditPhoto, Index, Login, Show
│       │   ├── Attendance/ (Config/, Index, Mark, MarkProduction, Timesheet/, Type/, WorkShift/)
│       │   │   └── WorkShift/Assign/ (Index, Report) ★ NEW
│       │   ├── Config/ (DocumentType/ ★ NEW, General, Index)
│       │   ├── Department/ (Action, Index, Show)
│       │   ├── Designation/ (Action, Index, Show)
│       │   ├── Dialogue/ (Action, Index, Show) ★ NEW
│       │   ├── Document/ (Action, Index, Show)
│       │   ├── Documents/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── EditRequest/ (Index, Show)
│       │   ├── Experience/ (Action, Index, Show)
│       │   ├── Experiences/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── Incharge/ (Index)
│       │   ├── Leave/ (Allocation/, Config/, Request/, Type/)
│       │   ├── Payroll/ (Action, Config/, Index, PayHead/, Process ★ NEW, SalaryStructure/, SalaryTemplate/, Show)
│       │   ├── ProfileEditRequest/ (Action, Index, Show)
│       │   ├── Qualification/ (Action, Index, Show)
│       │   ├── Qualifications/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── Record/ (Action, Index, Show)
│       │   └── WorkShift/ (Action, Index, Show)
│       ├── Errors/ (4 components)
│       │   ├── 401, 403, 404, Index
│       ├── Exam/ (46 components)
│       │   ├── Action, Index, Show
│       │   ├── AdmitCard/ (Index)
│       │   ├── Assessment/ (Action, Index, Show)
│       │   ├── Attendance/ (Index)
│       │   ├── Comment/ (Index)
│       │   ├── Competency/ (Action, Index, Show) ★ NEW
│       │   ├── CompetencyEvaluation/ (Index) ★ NEW
│       │   ├── Config/ (General, Index)
│       │   ├── Form/ (Index, Show ★ NEW)
│       │   ├── Grade/ (Action, Index, Show)
│       │   ├── Mark/ (Index)
│       │   ├── Marksheet/ (Index, Print/Index, Process/Index)
│       │   ├── Observation/ (Action, Index, Show)
│       │   ├── ObservationMark/ (Index)
│       │   ├── OnlineExam/ (Action, General, Index, Question/Index, Show, Submission, Submission/Index, Submit)
│       │   ├── Report/ (ExamSummary/Index, Index, MarkSummary/Index)
│       │   ├── Schedule/ (Action, FormSubmission, Index, Show)
│       │   └── Term/ (Action, Index, Show)
│       ├── Finance/ (56 components)
│       │   ├── Config/ (General, Index, PaymentGateway)
│       │   ├── DayClosure/ (Action, Index, Show) ★ NEW
│       │   ├── FeeComponent/ (Action, Index, Show) ★ NEW
│       │   ├── FeeConcession/ (Action, Index, Show)
│       │   ├── FeeGroup/ (Action, Index, Show)
│       │   ├── FeeHead/ (Action, Index, Show)
│       │   ├── FeeStructure/ (Action, Index, Show)
│       │   ├── FeeStructureComponent/ (Action, Index, Show) ★ NEW
│       │   ├── Ledger/ (Action, Index, Show)
│       │   ├── LedgerType/ (Action, Index, Show)
│       │   ├── PaymentMethod/ (Action, Index, Show)
│       │   ├── Receipt/ (Action, Index, Show) ★ NEW
│       │   ├── Report/ (BankTransfer/ ★, DayBook/ ★, FeeConcession/, FeeConcessionSummary/ ★, FeeDue/, FeeHead/, FeePayment/, FeeRefund/, FeeSummary/, HeadWiseFeePayment/, Index, InstallmentWiseFeeDue/, OnlineFeePayment/, PaymentMethodWiseFeePayment/)
│       │   ├── Tax/ (Action, Index, Show) ★ NEW
│       │   └── Transaction/ (Action, Index, Show)
│       ├── Form/ (9 components)
│       │   ├── Action, Index, Show, Submit
│       │   ├── Config/ (General, Index)
│       │   └── Submission/ (Index, Layout ★ NEW, Show)
│       ├── Gallery/ (5 components)
│       │   ├── Action, Index, Show
│       │   └── Config/ (General, Index)
│       ├── General/ (1 component) ★ NEW
│       │   └── BulkUpload/ (Action)
│       ├── Guardian/ (11 components)
│       │   ├── Basic, Contact, EditBasic, EditContact, EditLogin, EditPhoto, Index, Login, Show
│       │   └── Config/ (General, Index) ★ NEW
│       ├── Helpdesk/ (8 components) ★ NEW
│       │   ├── Config/ (General, Index)
│       │   ├── Faq/ (Action, Index, Show)
│       │   └── Ticket/ (Action, Index, Show)
│       ├── Hostel/ (15 components)
│       │   ├── Block/ (Action, Index, Show)
│       │   ├── BlockIncharge/ (Action, Index, Show)
│       │   ├── Floor/ (Action, Index, Show)
│       │   ├── Room/ (Action, Index, Show)
│       │   └── RoomAllocation/ (Action, Index, Show)
│       ├── Install/ (1 component)
│       │   └── Index.vue
│       ├── Inventory/ (37 components)
│       │   ├── Action, Index, Show
│       │   ├── Config/ (General, Index)
│       │   ├── Incharge/ (Action, Index, Show)
│       │   ├── Report/ (Index, ItemSummary/Index) ★ NEW
│       │   ├── StockAdjustment/ (Action, Index, Show)
│       │   ├── StockCategory/ (Action, Index, Show)
│       │   ├── StockItem/ (Action, Index, Show)
│       │   ├── StockItemCopy/ (Index) ★ NEW
│       │   ├── StockItemLabel/ (Print) ★ NEW
│       │   ├── StockPurchase/ (Action, Index, Show)
│       │   ├── StockRequisition/ (Action, Index, Show)
│       │   ├── StockReturn/ (Action, Index, Show) ★ NEW
│       │   ├── StockTransfer/ (Action, Index, Show)
│       │   └── Vendor/ (Action, Index, Show, Statement) ★ NEW (moved from Purchase)
│       ├── Library/ (17 components)
│       │   ├── Book/ (Action, Index, Show)
│       │   ├── BookAddition/ (Action, Index, Show)
│       │   ├── BookCopy/ (Index) ★ NEW
│       │   ├── BookLabel/ (Print) ★ NEW
│       │   ├── BookWiseTransaction/ (Index) ★ NEW
│       │   ├── Config/ (General ★ NEW, Index)
│       │   ├── Report/ (Index, TopBorrowedBook/Index, TopBorrower/Index) ★ NEW
│       │   └── Transaction/ (Action, Index, Show)
│       ├── Mess/ (11 components)
│       │   ├── Config/ (General, Index)
│       │   ├── Meal/ (Action, Index, Show)
│       │   ├── MealLog/ (Action, Index, Show)
│       │   └── MenuItem/ (Action, Index, Show)
│       ├── News/ (6 components) ★ NEW
│       │   ├── Action, Edit, Index, Show
│       │   └── Config/ (General, Index)
│       ├── Notification/ (1 component) ★ NEW
│       │   └── Index.vue
│       ├── Option/ (2 components)
│       │   ├── Action, Index
│       ├── Organization/ (3 components) ★ NEW
│       │   ├── Action, Index, Show
│       ├── Post/ (5 components) ★ NEW
│       │   ├── Edit, Index, Show
│       │   └── Config/ (General, Index)
│       ├── Product/ (2 components)
│       │   ├── Index, License
│       ├── Reception/ (24 components)
│       │   ├── CallLog/ (Action, Index, Show)
│       │   ├── Complaint/ (Action, Index, Show)
│       │   ├── Config/ (General, Index)
│       │   ├── Correspondence/ (Action, Index, Show)
│       │   ├── Enquiry/ (Action, Index, Show, Wizard ★ NEW)
│       │   ├── GatePass/ (Action, Index, Show)
│       │   ├── OnlineEnquiry/ (Index) ★ NEW
│       │   ├── Query/ (Index, Show)
│       │   └── VisitorLog/ (Action, Index, Show)
│       ├── Recruitment/ (11 components)
│       │   ├── Application/ (Action ★ NEW, Index, Show)
│       │   ├── Config/ (General, Index)
│       │   ├── Job/ (Application, Vacancy, VacancyDetail)
│       │   └── Vacancy/ (Action, Index, Show)
│       ├── Reminder/ (3 components) ★ NEW
│       │   ├── Action, Index, Show
│       ├── Resource/ (29 components)
│       │   ├── Assignment/ (Action, Index, Show)
│       │   ├── BookList/ (Index)
│       │   ├── Config/ (General, Index)
│       │   ├── Diary/ (Action, Index, Preview, Show)
│       │   ├── Download/ (Action, Index, Show)
│       │   ├── LearningMaterial/ (Action, Index, Show)
│       │   ├── LessonPlan/ (Action, Index, Show)
│       │   ├── OnlineClass/ (Action, Index, Show)
│       │   ├── Report/ (DateWiseAssignment/, DateWiseLearningMaterial/, DateWiseStudentDiary/, Index)
│       │   └── Syllabus/ (Action, Index, Show)
│       ├── Site/ (16 components)
│       │   ├── Block/ (Action, Edit, Index, Show)
│       │   ├── Config/ (General, Index)
│       │   ├── Menu/ (Action, Index, Show)
│       │   ├── Page/ (Action, Edit, Index, Show, View ★ NEW)
│       │   └── Post/ (Index, View) ★ NEW
│       ├── Student/ (102 components)
│       │   ├── Account/ (Action, Index, Show)
│       │   ├── Accounts/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── Attendance.vue + Attendance/ (Absentee, Index)
│       │   ├── Basic, Contact, EditBasic, EditContact, EditLogin, EditPhoto, Index, Login, Show
│       │   ├── Config/ (AttendanceType/ ★ NEW, DocumentType/ ★ NEW, General, Index)
│       │   ├── CustomFee/ (Action, Index, Show)
│       │   ├── Dialogue/ (Action, Index, Show) ★ NEW
│       │   ├── Document/ (Action, Index, Show)
│       │   ├── Documents/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── EditRequest/ (Index, Show)
│       │   ├── ExamReport.vue
│       │   ├── Fee/ (Edit, Index, Set)
│       │   ├── FeeAllocation/ (Index)
│       │   ├── FeeRefund/ (Action, Index, Show)
│       │   ├── Guardian/ (Action, Index)
│       │   ├── GuestPayment/ (Anonymous, Index)
│       │   ├── HealthRecord/ (Index)
│       │   ├── LeaveRequest/ (Action, Index, Show)
│       │   ├── MigrateAttendance.vue ★ NEW
│       │   ├── OnlineRegistration/ (Form, Index, Verify)
│       │   ├── Photo/ (Index) ★ NEW
│       │   ├── ProfileEditRequest/ (Action, Index, Show)
│       │   ├── Promotion/ (Index)
│       │   ├── Qualification/ (Action, Index, Show)
│       │   ├── Qualifications/ (Action, Index, Show) ★ NEW (plural)
│       │   ├── Record/ (Index)
│       │   ├── Registration/ (Action, Index, Show, Wizard ★ NEW)
│       │   ├── Report/ (BatchWiseAttendance/, DailyAccessReport/ ★, DateWiseAttendance/, Index, SubjectWiseAttendance/, SubjectWiseStudent/ ★)
│       │   ├── RollNumber/ (Index)
│       │   ├── ServiceAllocation/ (Index) ★ NEW
│       │   ├── ServiceRequest/ (Action, Index, Show) ★ NEW
│       │   ├── Sibling/ (Index)
│       │   ├── Subject.vue + Subject/ (Index)
│       │   ├── Timesheet/ (Action, Batch, Index, Show) ★ NEW
│       │   ├── Transfer/ (Action, ApprovalRequest/Index ★, Index, Show)
│       │   ├── TransferCertificate/ (Index) ★ NEW
│       │   └── TransferRequest/ (Action, Index, Show)
│       ├── Support/ (1 component) ★ NEW
│       │   └── Index.vue
│       ├── Task/ (11 components) ★ NEW
│       │   ├── Action, General, Index, Show
│       │   ├── Checklist/ (Index)
│       │   ├── Config/ (General, Index)
│       │   ├── Dashboard/ (Index)
│       │   ├── Media/ (Index)
│       │   ├── Member/ (Index)
│       │   └── Repeat/ (Index)
│       ├── Team/ (11 components)
│       │   ├── Action, Index, Selection, Show
│       │   └── Config/ (Asset/Index, General/Index, Index, Permission/Index, Permission/User, Role/Action, Role/Index) ★ EXPANDED
│       ├── Transport/ (57 components)
│       │   ├── Circle/ (Action, Index, Show)
│       │   ├── Config/ (General, Index)
│       │   ├── Fee/ (Action, Index, Show)
│       │   ├── Report/ (BatchWiseRoute/Index ★, Index, RouteWiseStudent/Index ★) ★ NEW
│       │   ├── Route/ (Action, Index, Show)
│       │   ├── Stoppage/ (Action, Index, Show)
│       │   └── Vehicle/ (57 sub-components)
│       │       ├── Action, General ★, Index, Show
│       │       ├── CaseRecord/ (Action, Index, Show) ★ NEW
│       │       ├── Config/ (DocumentType/ ★, ExpenseType/ ★, General ★, Index ★) ★ NEW
│       │       ├── Detail/ (CaseRecord/, Document/, ExpenseRecord/, FuelRecord/, Incharge/, ServiceRecord/, TripRecord/) ★ NEW
│       │       ├── Document/ (Action, Index, Show)
│       │       ├── ExpenseRecord/ (Action, Index, Show) ★ NEW
│       │       ├── FuelRecord/ (Action, Index, Show)
│       │       ├── Incharge/ (Action, Index, Show) ★ NEW
│       │       ├── ServiceRecord/ (Action, Index, Show)
│       │       └── TripRecord/ (Action, Index, Show)
│       ├── User/ (9 components)
│       │   ├── Action, ForceChangePassword ★ NEW, Index, Show
│       │   └── Profile/ (Account ★, Avatar ★, Index, Password, Preference ★) ★ EXPANDED
│       └── Utility/ (7 components)
│           ├── ActivityLog/ (Index)
│           ├── Backup/ (Index)
│           ├── Config/ (General, Index)
│           └── Todo/ (Action, Index, Show)
```

---

## Phase 2: Understand the Component Pattern

### Key Discovery: Every component follows the same pattern

From analyzing the minified code, **every module uses 3 component types**:

#### **Index.vue** (List Page)
- Displays a data table
- Has filters
- Links to Create/Edit/Show
- Uses `PageHeader` + `PageHeaderAction` global components

#### **Action.vue** (Create/Edit/Duplicate Form)
- Wraps a `FormAction` global component
- Defines `initForm` (field defaults) and `initUrl` (API endpoint)
- Contains a `PageHeader` with breadcrumb navigation
- Route meta determines mode: `{action: 'create'}`, `{action: 'edit'}`, `{action: 'duplicate'}`

#### **Show.vue** (Detail Page)
- Displays entity details
- Read-only view
- Uses `PageHeader` + `PageHeaderAction` with edit/delete actions

### Example: How a minified Action.vue maps to readable code

**Minified** (`public/build/assets/Action-0cU59jp0.js` - Finance LedgerType):
```js
const a={name:"",alias:"",parent:"",description:""},m="finance/ledgerType/"
```

**Readable reconstruction**:
```vue
<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.ledger_type.ledger_type'), path: 'FinanceLedgerTypeList' }
    ]"
  >
    <PageHeaderAction name="FinanceLedgerType" :title="$trans('finance.ledger_type.ledger_type')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <FinanceLedgerTypeForm />
  </ParentTransition>
</template>
```

**Form component**:
```vue
<template>
  <FormAction
    pre-requisites
    @set-pre-requisites="setPreRequisites"
    :init-url="initUrl"
    :init-form="initForm"
    :form="form"
    :set-form="setForm"
    redirect="FinanceLedgerType"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <BaseInput type="text" v-model="form.name" name="name"
          :label="$trans('finance.ledger_type.props.name')"
          v-model:error="formErrors.name" autofocus />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseInput type="text" v-model="form.alias" name="alias"
          :label="$trans('finance.ledger_type.props.alias')"
          v-model:error="formErrors.alias" />
      </div>
      <div class="col-span-3 sm:col-span-1">
        <BaseSelect v-model="form.parent" name="parent"
          :label="$trans('finance.ledger_type.props.parent')"
          :options="preRequisites.types" label-prop="name" value-prop="uuid"
          v-model:error="formErrors.parent" />
      </div>
      <div class="col-span-3">
        <BaseTextarea v-model="form.description" name="description"
          :label="$trans('finance.ledger_type.props.description')"
          v-model:error="formErrors.description" />
      </div>
    </div>
  </FormAction>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { useFormErrors } from '@/helpers/form';

const route = useRoute();
const initUrl = 'finance/ledgerType/';
const formErrors = useFormErrors(initUrl);

const initForm = { name: '', alias: '', parent: '', description: '' };
const preRequisites = reactive({ types: [] });
const form = reactive({ ...initForm });
const isLoaded = reactive({ isLoaded: !route.params.uuid });

const setPreRequisites = (data) => { Object.assign(preRequisites, data); };
const setForm = (data) => {
    Object.assign(initForm, { ...data, parent: data.parent?.uuid || '' });
    Object.assign(form, { ...initForm });
    isLoaded.isLoaded = true;
};
</script>
```

---

## Phase 3: Decompile Each Component

### 3.1 Beautify all minified JS files

Install js-beautify and run on all assets:

```bash
npm install -g js-beautify

# Beautify all component chunks
mkdir -p beautified
for file in public/build/assets/*.js; do
    filename=$(basename "$file")
    js-beautify "$file" -o "beautified/$filename"
done
```

### 3.2 Reading Minified Code - Symbol Reference

The main app bundle (`app-BYBn2zfx.js`, 5.7MB) exports these Vue helpers with short names. Here's the mapping:

> **Note**: These mappings were derived from the minified bundle and may shift between builds. Verify against the current `app-BYBn2zfx.js` by searching for known patterns like `resolveComponent` or `createVNode`.

| Minified | Vue/App Equivalent | Usage |
|----------|-------------------|-------|
| `n()` | `openBlock()` | Template render |
| `w()` | `withCtx()` | Slot context |
| `l()` | `createVNode()` | Create component |
| `f()` | `createElementVNode()` / `h()` | Create HTML element |
| `o()` | `withDirectives()` | Apply directives |
| `_()` | `createTextVNode()` | Text node |
| `k()` | `toDisplayString()` | Template interpolation |
| `u()` | `createCommentVNode()` | `v-if` false branch |
| `p()` | `resolveComponent()` | Get component by name |
| `b()` | `Fragment` | Fragment wrapper |
| `a()` | `unref()` | Unwrap ref |
| `q()` | `reactive()` | Reactive state |
| `d()` | `resolveComponent()` | Resolve component |
| `i()` | `computed()` / getter | Get config value |
| `g()` | `useRoute()` | Current route |
| `A()` | `useRoute()` | Route (alias) |
| `D()` | `useRouter()` | Router instance |
| `N()` | `useStore()` | Vuex store |
| `S()` | `useFormErrors()` | Form error helper |
| `H()` | `onMounted()` | Lifecycle hook |
| `I()` | `resolveDirective()` | Get directive |
| `P()` | `deepClone()` / `cloneDeep()` | Deep clone |

### 3.3 Global Components Available in Templates

These are registered globally and available in every component:

| Component | Purpose |
|-----------|---------|
| `PageHeader` | Page title + breadcrumb navigation |
| `PageHeaderAction` | Action buttons in page header (create, list, edit, delete) |
| `FormAction` | Wraps all CRUD forms - handles submit, validation, pre-requisites |
| `FormActionButton` | Submit/Cancel buttons in forms |
| `BaseInput` | Text/email/password input field |
| `BaseSelect` | Dropdown select field |
| `BaseTextarea` | Textarea field |
| `BaseCheckbox` | Checkbox field |
| `BaseSwitch` | Toggle switch |
| `BaseLink` | Router link |
| `BaseButton` | Button component |
| `ParentTransition` | Page-level transition wrapper |
| `ChildTransition` | Sub-section transition wrapper |
| `ShowButton` | Button to navigate to show/detail page |
| `GuestHeader` | Header for guest/auth pages |
| `ConfigPage` | Configuration page layout |
| `ConfigSidebar` | Sidebar for config pages |
| `ModuleConfig` | Module configuration wrapper |
| `TeamSelection` | Team/school selector |
| `PeriodSelection` | Academic period selector |
| `CustomField` | Dynamic custom field renderer |

---

## Phase 4: Reconstruct the Vuex Store

### 4.1 Store Architecture

The app uses a **generic CRUD store pattern**. Most modules use shared helpers:

```js
// resources/js/stores/helpers.js
import axios from 'axios';

const apiClient = axios.create({ baseURL: '/api/v1' });

// Generic CRUD actions used by all modules
export const crudActions = {
    async list({ state, commit }, params) {
        const response = await apiClient.get(state.initURL, { params });
        commit('SET_LIST', response.data);
        return response;
    },
    async get({ state, commit }, uuid) {
        const response = await apiClient.get(`${state.initURL}/${uuid}`);
        return response;
    },
    async create({ state, commit }, form) {
        const response = await apiClient.post(state.initURL, form);
        return response;
    },
    async update({ state, commit }, { uuid, form }) {
        const response = await apiClient.put(`${state.initURL}/${uuid}`, form);
        return response;
    },
    async delete({ state, commit }, uuid) {
        const response = await apiClient.delete(`${state.initURL}/${uuid}`);
        return response;
    },
    async preRequisite({ state }, params) {
        const response = await apiClient.get(`${state.initURL}/pre-requisite`, { params });
        return response;
    },
    resetFormErrors({ commit }) {
        commit('RESET_FORM_ERRORS');
    },
    resetState({ commit }) {
        commit('RESET_STATE');
    },
};

export const crudMutations = {
    SET_FORM_ERRORS(state, errors) { state.formErrors = errors; },
    RESET_FORM_ERRORS(state) { state.formErrors = {}; },
    RESET_STATE(state) { state.formErrors = {}; },
    SET_LIST(state, data) { state.list = data; },
};

export const crudGetters = {
    getFormErrors: (state) => state.formErrors,
};
```

### 4.2 Store Modules and Their API URLs

Each store module has an `initURL` that maps to a Laravel API endpoint:

```
Module                          → initURL (prepend /api/v1)
─────────────────────────────────────────────────────────────
auth/user                       → /app/auth
setup                           → /app/setup
navigation                      → /app/navigation
config                          → /app/config
dashboard                       → /app/dashboard
user                            → /app/users
team                            → /app/teams
chat                            → /app/chats
customField                     → /app/custom-fields
option                          → /app/options
tag                             → /app/tags
notification                    → /app/notifications
organization                    → /app/organizations
reminder                        → /app/reminders

── Academic ──
academic/department             → /app/academic/departments
academic/program                → /app/academic/programs
academic/programType            → /app/academic/program-types
academic/period                 → /app/academic/periods
academic/course                 → /app/academic/courses
academic/batch                  → /app/academic/batches
academic/division               → /app/academic/divisions
academic/subject                → /app/academic/subjects
academic/session                → /app/academic/sessions
academic/classTiming            → /app/academic/class-timings
academic/timetable              → /app/academic/timetables
academic/certificate            → /app/academic/certificates
academic/certificateTemplate    → /app/academic/certificate-templates
academic/idCardTemplate         → /app/academic/id-card-templates
academic/bookList               → /app/academic/book-lists
academic/enrollmentSeat         → /app/academic/enrollment-seats

── Student ──
student/registration            → /app/students/registrations
student/rollNumber              → /app/students/roll-numbers
student/healthRecord            → /app/students/health-records
student/subject                 → /app/students/subjects
student/attendance              → /app/students/attendance
student/feeAllocation           → /app/students/fee-allocations
student/customFee               → /app/students/custom-fees
student/feeRefund               → /app/students/fee-refunds
student/promotion               → /app/students/promotions
student/transfer                → /app/students/transfers
student/leaveRequest            → /app/students/leave-requests
student/document                → /app/students/documents
student/qualification           → /app/students/qualifications
student/account                 → /app/students/accounts
student/onlineRegistration      → /app/students/online-registrations
student/guestPayment            → /app/students/guest-payments
student/serviceRequest          → /app/students/service-requests
student/serviceAllocation       → /app/students/service-allocations
student/timesheet               → /app/students/timesheets
student/dialogue                → /app/students/dialogues
student/transferCertificate     → /app/students/transfer-certificates
student/attendanceType          → /app/students/attendance-types
student/documentType            → /app/students/document-types

── Employee ──
employee/department             → /app/employees/departments
employee/designation            → /app/employees/designations
employee/record                 → /app/employees/records
employee/document               → /app/employees/documents
employee/qualification          → /app/employees/qualifications
employee/experience             → /app/employees/experiences
employee/account                → /app/employees/accounts
employee/attendance             → /app/employees/attendance
employee/attendanceType         → /app/employees/attendance-types
employee/workShift              → /app/employees/work-shifts
employee/timesheet              → /app/employees/timesheets
employee/leaveType              → /app/employees/leave-types
employee/leaveAllocation        → /app/employees/leave-allocations
employee/leaveRequest           → /app/employees/leave-requests
employee/payHead                → /app/employees/pay-heads
employee/salaryStructure        → /app/employees/salary-structures
employee/salaryTemplate         → /app/employees/salary-templates
employee/payroll                → /app/employees/payrolls
employee/dialogue               → /app/employees/dialogues
employee/documentType           → /app/employees/document-types

── Finance ──
finance/ledgerType              → /app/finance/ledger-types
finance/ledger                  → /app/finance/ledgers
finance/feeGroup                → /app/finance/fee-groups
finance/feeHead                 → /app/finance/fee-heads
finance/feeStructure            → /app/finance/fee-structures
finance/feeConcession           → /app/finance/fee-concessions
finance/paymentMethod           → /app/finance/payment-methods
finance/transaction             → /app/finance/transactions
finance/dayClosure              → /app/finance/day-closures
finance/feeComponent            → /app/finance/fee-components
finance/feeStructureComponent   → /app/finance/fee-structure-components
finance/receipt                 → /app/finance/receipts
finance/tax                     → /app/finance/taxes

── Exam ──
exam/term                       → /app/exams/terms
exam/grade                      → /app/exams/grades
exam/assessment                 → /app/exams/assessments
exam/observation                → /app/exams/observations
exam/schedule                   → /app/exams/schedules
exam/onlineExam                 → /app/exams/online-exams
exam/competency                 → /app/exams/competencies

── Reception ──
reception/enquiry               → /app/reception/enquiries
reception/visitorLog            → /app/reception/visitor-logs
reception/gatePass              → /app/reception/gate-passes
reception/complaint             → /app/reception/complaints
reception/callLog               → /app/reception/call-logs
reception/correspondence        → /app/reception/correspondences

── Resource ──
resource/assignment             → /app/resources/assignments
resource/diary                  → /app/resources/diaries
resource/lessonPlan             → /app/resources/lesson-plans
resource/syllabus               → /app/resources/syllabuses
resource/onlineClass            → /app/resources/online-classes
resource/learningMaterial       → /app/resources/learning-materials
resource/download               → /app/resources/downloads

── Transport ──
transport/circle                → /app/transports/circles
transport/route                 → /app/transports/routes
transport/stoppage              → /app/transports/stoppages
transport/fee                   → /app/transports/fees
transport/vehicle               → /app/transports/vehicles
transport/vehicle/incharge      → /app/transports/vehicles/{vehicle}/incharges
transport/vehicle/caseRecord    → /app/transports/vehicles/{vehicle}/case-records
transport/vehicle/expenseRecord → /app/transports/vehicles/{vehicle}/expense-records
transport/vehicle/tripRecord    → /app/transports/vehicles/{vehicle}/trip-records
transport/vehicle/documentType  → /app/transports/document-types
transport/vehicle/expenseType   → /app/transports/expense-types

── Hostel ──
hostel/block                    → /app/hostels/blocks
hostel/floor                    → /app/hostels/floors
hostel/room                     → /app/hostels/rooms
hostel/roomAllocation           → /app/hostels/room-allocations
hostel/blockIncharge            → /app/hostels/block-incharges

── Library ──
library/book                    → /app/library/books
library/bookAddition            → /app/library/book-additions
library/transaction             → /app/library/transactions
library/bookCopy                → /app/library/book-copies
library/bookWiseTransaction     → /app/library/book-wise-transactions

── Inventory ──
inventory/stockCategory         → /app/inventory/stock-categories
inventory/stockItem             → /app/inventory/stock-items
inventory/stockPurchase         → /app/inventory/stock-purchases
inventory/stockRequisition      → /app/inventory/stock-requisitions
inventory/stockTransfer         → /app/inventory/stock-transfers
inventory/stockAdjustment       → /app/inventory/stock-adjustments
inventory/stockReturn           → /app/inventory/stock-returns
inventory/stockItemCopy         → /app/inventory/stock-item-copies
inventory/vendor                → /app/inventory/vendors

── Communication ──
communication/announcement      → /app/communications/announcements
communication/email             → /app/communications/emails
communication/sms               → /app/communications/sms
communication/pushMessage       → /app/communications/push-messages
communication/whatsApp          → /app/communications/whatsapp

── Approval ──
approval/type                   → /app/approval/types
approval/request                → /app/approval/requests

── Helpdesk ──
helpdesk/faq                    → /app/helpdesk/faqs
helpdesk/ticket                 → /app/helpdesk/tickets

── Task ──
task                            → /app/tasks

── News ──
news                            → /app/news

── Post ──
post                            → /app/posts

── Others ──
calendar/event                  → /app/calendar/events
calendar/holiday                → /app/calendar/holidays
discipline/incident             → /app/discipline/incidents
gallery                         → /app/galleries
mess/meal                       → /app/mess/meals
mess/mealLog                    → /app/mess/meal-logs
mess/menuItem                   → /app/mess/menu-items
activity/trip                   → /app/activities/trips
form                            → /app/forms
blog                            → /app/blogs
recruitment/vacancy             → /app/recruitment/vacancies
asset/building/block            → /app/assets/building/blocks
asset/building/floor            → /app/assets/building/floors
asset/building/room             → /app/assets/building/rooms
site/page                       → /app/site/pages
site/menu                       → /app/site/menus
site/block                      → /app/site/blocks
device                          → /app/devices
utility/todo                    → /app/utility/todos
utility/backup                  → /app/utility/backups
utility/activityLog             → /app/utility/activity-logs
```

### 4.3 Create Store Module Example

```js
// resources/js/stores/modules/finance/ledgerType.js
import { crudActions, crudMutations, crudGetters } from '../../helpers';

export default {
    namespaced: true,
    state: () => ({
        initURL: '/app/finance/ledger-types',
        formErrors: {},
        list: {},
    }),
    actions: { ...crudActions },
    mutations: { ...crudMutations },
    getters: { ...crudGetters },
};
```

---

## Phase 5: Reconstruct the Vue Router

### 5.1 Route Naming Convention

Routes follow a strict pattern. For every module entity:

| Route Name | Component | Path |
|------------|-----------|------|
| `{Module}{Entity}` | Parent wrapper | `{module}/{entities}` |
| `{Module}{Entity}List` | `Index.vue` | (child, path: '') |
| `{Module}{Entity}Create` | `Action.vue` | `create` (meta: action='create') |
| `{Module}{Entity}Edit` | `Action.vue` | `:uuid/edit` (meta: action='edit') |
| `{Module}{Entity}Duplicate` | `Action.vue` | `:uuid/duplicate` (meta: action='duplicate') |
| `{Module}{Entity}Show` | `Show.vue` | `:uuid` |

### 5.2 Example Router Config

```js
// resources/js/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/Layouts/App.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/Pages/Dashboard/Index.vue'),
            },
            // Academic Module
            {
                path: 'academic/departments',
                name: 'AcademicDepartment',
                redirect: { name: 'AcademicDepartmentList' },
                children: [
                    {
                        path: '',
                        name: 'AcademicDepartmentList',
                        component: () => import('@/views/Pages/Academic/Department/Index.vue'),
                    },
                    {
                        path: 'create',
                        name: 'AcademicDepartmentCreate',
                        meta: { action: 'create', trans: 'global.create', label: 'academic.department.department' },
                        component: () => import('@/views/Pages/Academic/Department/Action.vue'),
                    },
                    {
                        path: ':uuid/edit',
                        name: 'AcademicDepartmentEdit',
                        meta: { action: 'edit', trans: 'global.edit', label: 'academic.department.department' },
                        component: () => import('@/views/Pages/Academic/Department/Action.vue'),
                    },
                    {
                        path: ':uuid',
                        name: 'AcademicDepartmentShow',
                        component: () => import('@/views/Pages/Academic/Department/Show.vue'),
                    },
                ],
            },
            // ... repeat for all 70+ modules
        ],
    },
    {
        path: '/auth',
        component: () => import('@/views/Layouts/Guest.vue'),
        children: [
            { path: 'login', name: 'Login', component: () => import('@/views/Pages/Auth/Login.vue') },
            { path: 'register', name: 'Register', component: () => import('@/views/Pages/Auth/Register.vue') },
            { path: 'password', name: 'Password', component: () => import('@/views/Pages/Auth/Password.vue') },
            { path: 'email-otp', name: 'EmailOtp', component: () => import('@/views/Pages/Auth/EmailOtp.vue') },
            { path: 'sms-otp', name: 'SMSOtp', component: () => import('@/views/Pages/Auth/SMSOtp.vue') },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```

---

## Phase 6: Reconstruct the App Entry Point

```js
// resources/js/app.js
import { createApp } from 'vue';
import router from './router';
import store from './stores';
import FloatingVue from 'floating-vue';

// Import global CSS
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp({
    template: '<router-view />'
});

app.use(router);
app.use(store);
app.use(FloatingVue);

// Register global components
import PageHeader from './components/PageHeader.vue';
import PageHeaderAction from './components/PageHeaderAction.vue';
import FormAction from './components/FormAction.vue';
import BaseInput from './components/BaseInput.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseTextarea from './components/BaseTextarea.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import BaseSwitch from './components/BaseSwitch.vue';
import BaseButton from './components/BaseButton.vue';
import BaseLink from './components/BaseLink.vue';
import ParentTransition from './components/ParentTransition.vue';
import ChildTransition from './components/ChildTransition.vue';
import GuestHeader from './components/GuestHeader.vue';
import ShowButton from './components/ShowButton.vue';

app.component('PageHeader', PageHeader);
app.component('PageHeaderAction', PageHeaderAction);
app.component('FormAction', FormAction);
app.component('BaseInput', BaseInput);
app.component('BaseSelect', BaseSelect);
app.component('BaseTextarea', BaseTextarea);
app.component('BaseCheckbox', BaseCheckbox);
app.component('BaseSwitch', BaseSwitch);
app.component('BaseButton', BaseButton);
app.component('BaseLink', BaseLink);
app.component('ParentTransition', ParentTransition);
app.component('ChildTransition', ChildTransition);
app.component('GuestHeader', GuestHeader);
app.component('ShowButton', ShowButton);

// Global translation helper
app.config.globalProperties.$trans = (key, replace = {}) => {
    let translation = window.trans?.[key] || key;
    for (const [search, value] of Object.entries(replace)) {
        translation = translation.replace(`:${search}`, value);
    }
    return translation;
};

app.mount('#root');
```

---

## Phase 7: Reconstructing Individual Components

### 7.1 How to read a minified component and rebuild it

**Step 1**: Find the compiled file in the manifest:
```json
"resources/js/views/Pages/Academic/Department/Action.vue": {
    "file": "assets/Action-XXXXX.js",
    "imports": ["resources/js/app.js"],
    ...
}
```

**Step 2**: Beautify the compiled file:
```bash
js-beautify public/build/assets/Action-XXXXX.js -o beautified/Action-Department.js
```

**Step 3**: Identify these key parts in the beautified code:
- `initForm` / `initUrl` → Form fields and API endpoint
- `resolveComponent("...")` → Which global components are used
- `class:"..."` → Tailwind CSS classes (copy exactly)
- `$trans("...")` → Translation keys (tells you what each field is)
- `modelValue: form.fieldName` → Form field bindings
- Route meta references → Breadcrumb navigation

**Step 4**: Reconstruct the Vue SFC using the pattern from Phase 2.

### 7.2 Priority Order for Reconstruction

1. **Global Components** (Phase 4 - `resources/js/components/`) - needed by everything
2. **Layouts** (7 files) - structural
3. **Auth** (8 files) - login + OTP flows needed first
4. **Dashboard** (1 file) - landing page
5. **Academic** (77 components) - core module, establishes patterns
6. **Student** (102 components) - largest module (tied)
7. **Employee** (102 components) - tied for largest
8. **Finance** (56 components) - critical for fees
9. **Transport** (57 components) - significantly expanded
10. **Exam** (46 components) - important for academics
11. **Inventory** (37 components) - now includes Vendor management (moved from Purchase)
12. **Task** (11 components) - new workflow module
13. **Approval** (10 components) - new approval workflows
14. **Helpdesk** (8 components) - new support ticket system
15. **All remaining modules** - follow established patterns

### 7.3 Cross-Reference Backend for Data Shapes

For every component, check the corresponding:

| Backend File | What It Tells You |
|-------------|-------------------|
| `app/Http/Controllers/{Module}/{Entity}Controller.php` | API methods, validation |
| `app/Http/Resources/{Module}/{Entity}Resource.php` | JSON response shape (fields returned) |
| `app/Http/Requests/{Module}/{Entity}Request.php` | Form validation rules = required fields |
| `app/Models/{Module}/{Entity}.php` | Database columns, relationships |
| `routes/modules/{module}.php` | URL patterns, route groups |
| `database/migrations/` | Column types and constraints |

---

## Phase 8: Build and Test

### 8.1 Install dependencies and build

```bash
npm install
npm run dev   # Development with hot reload
npm run build # Production build
```

### 8.2 Verify the build

```bash
# Check if manifest.json is generated
ls public/build/manifest.json

# Compare component count
cat public/build/manifest.json | python3 -c "
import json, sys
m = json.load(sys.stdin)
vue = [k for k in m if k.endswith('.vue')]
print(f'Vue components in build: {len(vue)}')
"
# Should be 828
```

### 8.3 Test in browser

1. Start Laravel dev server: `php artisan serve`
2. In another terminal: `npm run dev`
3. Open browser to `http://localhost:8000`
4. Test login → dashboard → each module

---

## Manifest File Reference

The complete mapping from source paths to compiled files is in:
```
public/build/manifest.json
```

This file is your **primary reference** for:
- All 828 Vue component source paths
- Their compiled output filenames
- Import dependencies between components
- CSS file associations

### Shared Chunks (34 reusable sub-components)

| Chunk | Purpose |
|-------|---------|
| `_Asset-BvZS6D8H.js` | Asset upload component |
| `_Billplz-BXjx2n9t.js` | Billplz payment integration |
| `_EditRequestInfo-B9LKMgpi.js` | Edit request info display (variant 1) |
| `_EditRequestInfo-S1RPBpK2.js` | Edit request info display (variant 2) |
| `_Filter-CQCpFpdl.js` | Filter component (variant 1) |
| `_Filter-laEwzXBf.js` | Filter component (variant 2) |
| `_Form-BTCtuZEI.css` | Shared form CSS styles |
| `_Form-CG8dVzSu.js` | Shared form utilities (variant 1, imports Form CSS) |
| `_Form-D7OqfvH1.js` | Shared form utilities (variant 2) |
| `_GeneralFilter-BOZXsInx.js` | General filter component (variant 1) |
| `_GeneralFilter-DXUfL7Xd.js` | General filter component (variant 2) |
| `_ModuleDropdown-BAyRRQXy.js` | Module dropdown (variant 1 of 7) |
| `_ModuleDropdown-BqWcAeUu.js` | Module dropdown (variant 2 of 7) |
| `_ModuleDropdown-BspMO-EN.js` | Module dropdown (variant 3 of 7) |
| `_ModuleDropdown-C0cKlZiy.js` | Module dropdown (variant 4 of 7) |
| `_ModuleDropdown-C8cyNPyi.js` | Module dropdown (variant 5 of 7) |
| `_ModuleDropdown-CmVYJTUt.js` | Module dropdown (variant 6 of 7) |
| `_ModuleDropdown-DFOOYxxd.js` | Module dropdown (variant 7 of 7) |
| `_Og-4Hc0YHpT.js` | OG image/meta component (variant 1 of 3) |
| `_Og-BvPN4rEK.js` | OG image/meta component (variant 2 of 3) |
| `_Og-sv6AEow0.js` | OG image/meta component (variant 3 of 3) |
| `_OnlinePaymentForm-VH_xe4rX.js` | Online payment form |
| `_ParentDetail-DbtK-2Xs.js` | Parent/Guardian detail display |
| `_ShowImages-DAgEG3tR.js` | Image gallery/viewer component |
| `_VendorForm-DxiURDSi.js` | Vendor form (Inventory module) |
| `_currency-AatEk08P.js` | Currency formatting utilities |
| `_index-CQkTw_A3.js` | Chart.js/vue-chartjs (variant 1) |
| `_index-ChVKCGt3.js` | Chart.js/vue-chartjs (variant 2) |
| `_lodash-9melqnBt.js` | Lodash utilities |
| `_simple-mode-GW_nhZxv.js` | CodeMirror simple mode |
| `_table-FwhM-Z75.js` | Data table component |
| `_useColumnVisibility-Uj2NoBgO.js` | Column visibility composable |
| `_useCustomFields-sZaczr4Q.js` | Custom fields composable |
| `_vuedraggable.umd-Cel5tS6V.js` | Drag-and-drop |

---

## Tips for Faster Reconstruction

1. **Start with one complete module** (e.g., Academic/Department - just 3 files: Index, Action, Show). Get it fully working, then use it as a template for all other modules.

2. **The `initForm` object in every Action.vue tells you ALL the form fields**. Search the beautified JS for patterns like `{name:"",description:""}`.

3. **Translation keys reveal field labels**. Search for `$trans("module.entity.props.fieldName")` patterns.

4. **CSS classes are Tailwind utilities** - copy them exactly from the minified code. They're human-readable even when minified.

5. **The `FormAction` component handles 90% of CRUD logic**. Your Action.vue components are mostly just form layouts.

6. **Use the backend API resources** (`app/Http/Resources/`) to understand what data comes back from the API for Show pages.

7. **Route names in minified code** (e.g., `"FinanceLedgerTypeList"`) tell you the navigation structure.

8. **The main app bundle** (`app-BYBn2zfx.js`) is 5.7MB and contains ALL global components, the store, and the router. Beautify this file first - it's the most information-dense.

9. **The app CSS bundle** (`app-Dqkc6l-z.css`, 558K) contains all global styles including Tailwind utilities. Beautify this file to understand the design system.

10. **New modules follow existing patterns**. Approval uses the same Index/Action/Show pattern. Task adds a Dashboard variant. Helpdesk follows the standard CRUD pattern with Ticket messaging.

---

## Estimated Effort

| Phase | Files | Hours |
|-------|-------|-------|
| Config files (package.json, vite, tailwind, postcss) | 4 | 4h |
| Directory structure + stubs | 828 | 4h (scripted) |
| Vuex store modules | ~55 | 20h |
| Vue Router | 1 (large) | 10h |
| Global components | ~20 | 16h |
| Page components (828 total) | 828 | 80-100h |
| App entry point + helpers | ~5 | 8h |
| Testing + fixes | - | 24h |
| **TOTAL** | | **~166-186h** |

The page components (Phase 7) are the bulk but they're highly repetitive. After doing 25-35, you'll have templates for every pattern in the app, including the new Task dashboard, Approval workflow, and Helpdesk ticket patterns.
