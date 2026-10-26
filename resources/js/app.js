import { createApp } from 'vue';
import router from './router';
import store from './stores';
import axios from 'axios';
import moment from 'moment';
import momentz from 'moment-timezone';
import Swal from 'sweetalert2';
import EventEmitter from 'eventemitter3';
import FloatingVue from 'floating-vue';
import Toast from 'vue-toastification';
import Vue3Marquee from 'vue3-marquee';
import VueTelInput from 'vue-tel-input';
import ContextMenu from '@imengyu/vue3-context-menu';
import { useLoading } from 'vue-loading-overlay';

// Import global CSS
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-toastification/dist/index.css';
import 'floating-vue/dist/style.css';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import 'vue-loading-overlay/dist/css/index.css';
import '../css/app.css';

// HTTP client
const http = axios.create({ baseURL: '/' });

// Event bus
const emitter = new EventEmitter();

const app = createApp({
    template: '<router-view />'
});

// Plugins
app.use(router);
app.use(store);
app.use(FloatingVue);
app.use(Toast, {
    position: 'bottom-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
});
app.use(Vue3Marquee);
app.use(VueTelInput);
app.use(ContextMenu);

// Global properties
app.config.globalProperties.$trans = (key, replace = {}) => {
    let translation = window.trans?.[key] || key;
    for (const [search, value] of Object.entries(replace)) {
        translation = translation.replace(`:${search}`, value);
    }
    return translation;
};
app.config.globalProperties.$http = http;
app.config.globalProperties.$swal = Swal;
app.config.globalProperties.moment = moment;
app.config.globalProperties.emitter = emitter;

// Provide for Composition API
const $loading = useLoading();
app.provide('$http', http);
app.provide('$trans', app.config.globalProperties.$trans);
app.provide('$swal', Swal);
app.provide('$loading', $loading);
app.provide('moment', moment);
app.provide('momentz', momentz);
app.provide('emitter', emitter);
app.config.globalProperties.$loading = $loading;

// Register global components
import PageHeader from './components/PageHeader.vue';
import PageHeaderAction from './components/PageHeaderAction.vue';
import FormAction from './components/FormAction.vue';
import FormActionButton from './components/FormActionButton.vue';
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
import ConfigPage from './components/ConfigPage.vue';
import ConfigSidebar from './components/ConfigSidebar.vue';
import ModuleConfig from './components/ModuleConfig.vue';
import TeamSelection from './components/TeamSelection.vue';
import PeriodSelection from './components/PeriodSelection.vue';
import CustomField from './components/CustomField.vue';

// Internal component library - Table
import ListItem from './components/Table/ListItem.vue';
import ShowItem from './components/Table/ShowItem.vue';
import DataTable from './components/Table/DataTable.vue';
import DataRow from './components/Table/DataRow.vue';
import DataCell from './components/Table/DataCell.vue';
import SimpleTable from './components/Table/SimpleTable.vue';

// Internal component library - UI
import BaseCard from './components/Ui/BaseCard.vue';
import BaseFlexCard from './components/Ui/BaseFlexCard.vue';
import BaseLoader from './components/Ui/BaseLoader.vue';
import BaseAlert from './components/Ui/BaseAlert.vue';
import BaseModal from './components/Ui/BaseModal.vue';
import BaseLabel from './components/Ui/BaseLabel.vue';
import TextMuted from './components/Ui/TextMuted.vue';
import DetailLayoutVertical from './components/Ui/DetailLayoutVertical.vue';
import ListContainerVertical from './components/Ui/ListContainerVertical.vue';
import ListItemView from './components/Ui/ListItemView.vue';
import BaseDataView from './components/Ui/BaseDataView.vue';
import FloatingMenu from './components/Ui/FloatingMenu.vue';
import FloatingMenuItem from './components/Ui/FloatingMenuItem.vue';
import DropdownMenu from './components/Ui/DropdownMenu.vue';
import DropdownItem from './components/Ui/DropdownItem.vue';

// Internal component library - Forms
import FilterForm from './components/Forms/FilterForm.vue';

app.component('PageHeader', PageHeader);
app.component('PageHeaderAction', PageHeaderAction);
app.component('FormAction', FormAction);
app.component('FormActionButton', FormActionButton);
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
app.component('ConfigPage', ConfigPage);
app.component('ConfigSidebar', ConfigSidebar);
app.component('ModuleConfig', ModuleConfig);
app.component('TeamSelection', TeamSelection);
app.component('PeriodSelection', PeriodSelection);
app.component('CustomField', CustomField);

// Table components
app.component('ListItem', ListItem);
app.component('ShowItem', ShowItem);
app.component('DataTable', DataTable);
app.component('DataRow', DataRow);
app.component('DataCell', DataCell);
app.component('SimpleTable', SimpleTable);

// UI components
app.component('BaseCard', BaseCard);
app.component('BaseFlexCard', BaseFlexCard);
app.component('BaseLoader', BaseLoader);
app.component('BaseAlert', BaseAlert);
app.component('BaseModal', BaseModal);
app.component('BaseLabel', BaseLabel);
app.component('TextMuted', TextMuted);
app.component('DetailLayoutVertical', DetailLayoutVertical);
app.component('ListContainerVertical', ListContainerVertical);
app.component('ListItemView', ListItemView);
app.component('BaseDataView', BaseDataView);
app.component('FloatingMenu', FloatingMenu);
app.component('FloatingMenuItem', FloatingMenuItem);
app.component('DropdownMenu', DropdownMenu);
app.component('DropdownItem', DropdownItem);

// Form components
app.component('FilterForm', FilterForm);

// Vendor platform components
import NotificationBar from './components/Ui/NotificationBar.vue';
import FooterCredit from './components/Ui/FooterCredit.vue';
import ErrorPage from './components/Ui/ErrorPage.vue';
import AppNavigation from './components/Ui/AppNavigation.vue';
import MobileSidebar from './components/Ui/MobileSidebar.vue';
import ProfileDropdown from './components/Ui/ProfileDropdown.vue';
import ReLogin from './components/Ui/ReLogin.vue';
import KeySearch from './components/Ui/KeySearch.vue';
import NotificationList from './components/Ui/NotificationList.vue';
import UserScope from './components/Ui/UserScope.vue';

app.component('NotificationBar', NotificationBar);
app.component('FooterCredit', FooterCredit);
app.component('ErrorPage', ErrorPage);
app.component('AppNavigation', AppNavigation);
app.component('MobileSidebar', MobileSidebar);
app.component('ProfileDropdown', ProfileDropdown);
app.component('ReLogin', ReLogin);
app.component('KeySearch', KeySearch);
app.component('NotificationList', NotificationList);
app.component('UserScope', UserScope);

// Additional vendor components
import SessionWisePeriodSelection from './components/Ui/SessionWisePeriodSelection.vue';
import TimesheetClock from './components/Ui/TimesheetClock.vue';
import StudentTimesheetClock from './components/Ui/StudentTimesheetClock.vue';
import NameInput from './components/Forms/NameInput.vue';
import AddressInput from './components/Forms/AddressInput.vue';
import PaymentMethodInput from './components/Forms/PaymentMethodInput.vue';
import PaymentMethodDetail from './components/Ui/PaymentMethodDetail.vue';
import LedgerBalance from './components/Ui/LedgerBalance.vue';
import AudienceInput from './components/Forms/AudienceInput.vue';
import MarkdownContent from './components/Ui/MarkdownContent.vue';
import PostReactions from './components/Ui/PostReactions.vue';
import ViewLog from './components/Ui/ViewLog.vue';
import EmployeeSummary from './components/Ui/EmployeeSummary.vue';
import AssignIncharge from './components/Ui/AssignIncharge.vue';

app.component('SessionWisePeriodSelection', SessionWisePeriodSelection);
app.component('TimesheetClock', TimesheetClock);
app.component('StudentTimesheetClock', StudentTimesheetClock);
app.component('NameInput', NameInput);
app.component('AddressInput', AddressInput);
app.component('PaymentMethodInput', PaymentMethodInput);
app.component('PaymentMethodDetail', PaymentMethodDetail);
app.component('LedgerBalance', LedgerBalance);
app.component('AudienceInput', AudienceInput);
app.component('MarkdownContent', MarkdownContent);
app.component('PostReactions', PostReactions);
app.component('ViewLog', ViewLog);
app.component('EmployeeSummary', EmployeeSummary);
app.component('AssignIncharge', AssignIncharge);

// Form library components
import ImageUpload from './components/Forms/ImageUpload.vue';
import MediaUpload from './components/Forms/MediaUpload.vue';
import BaseEditor from './components/Forms/BaseEditor.vue';
import DatePicker from './components/Forms/DatePicker.vue';

app.component('ImageUpload', ImageUpload);
app.component('MediaUpload', MediaUpload);
app.component('BaseEditor', BaseEditor);
app.component('DatePicker', DatePicker);

// Additional UI components
import BaseAccordion from './components/Ui/BaseAccordion.vue';
import BaseBadge from './components/Ui/BaseBadge.vue';
import BaseTab from './components/Ui/BaseTab.vue';
import TabGroup from './components/Ui/TabGroup.vue';
import BaseImport from './components/Ui/BaseImport.vue';

app.component('BaseAccordion', BaseAccordion);
app.component('BaseBadge', BaseBadge);
app.component('BaseTab', BaseTab);
app.component('TabGroup', TabGroup);
app.component('BaseImport', BaseImport);

app.mount('#root');
