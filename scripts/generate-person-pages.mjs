import fs from 'fs';

// Person-type entities share the same detail page pattern
const personModules = [
    { module: 'Student', route: 'Student', basePath: 'students', transKey: 'student' },
    { module: 'Employee', route: 'Employee', basePath: 'employees', transKey: 'employee' },
    { module: 'Guardian', route: 'Guardian', basePath: 'guardians', transKey: 'guardian' },
    { module: 'Contact', route: 'Contact', basePath: 'contacts', transKey: 'contact' },
];

const personPages = [
    { name: 'Basic', label: 'basic', icon: 'fas fa-user' },
    { name: 'Contact', label: 'contact', icon: 'fas fa-phone' },
    { name: 'Login', label: 'login', icon: 'fas fa-key' },
    { name: 'EditBasic', label: 'basic', icon: 'fas fa-edit', isEdit: true },
    { name: 'EditContact', label: 'contact', icon: 'fas fa-edit', isEdit: true },
    { name: 'EditLogin', label: 'login', icon: 'fas fa-edit', isEdit: true },
    { name: 'EditPhoto', label: 'photo', icon: 'fas fa-camera', isEdit: true },
];

let generated = 0;

for (const pm of personModules) {
    for (const page of personPages) {
        const filePath = `resources/js/views/Pages/${pm.module}/${page.name}.vue`;
        if (!fs.existsSync(filePath)) continue;

        const content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('TODO: Reconstruct')) continue;

        if (page.isEdit) {
            // Edit pages
            fs.writeFileSync(filePath, `<template>
  <PageHeader
    :title="$trans('global.edit', { attribute: $trans('${pm.transKey}.${pm.transKey}') })"
    :navs="[
      { label: $trans('${pm.transKey}.${pm.transKey}'), path: '${pm.route}List' },
      { label: item.name || '', path: { name: '${pm.route}Show', params: { uuid: $route.params.uuid } } },
    ]"
  />

  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('${pm.transKey}.props.${page.label}') }}</template>
      <FormAction
        :init-url="initUrl"
        :init-form="initForm"
        :form="form"
        :set-form="setForm"
        :redirect="{ name: '${pm.route}Show', params: { uuid: $route.params.uuid } }"
      >
        <div class="grid grid-cols-3 gap-6">
          <!-- TODO: Add ${page.label} edit fields from beautified source -->
          <div class="col-span-3">
            <p class="text-gray-500">Edit ${page.label} form - fields to be reconstructed</p>
          </div>
        </div>
      </FormAction>
    </BaseCard>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const initUrl = '${pm.basePath}/';
const initForm = {};
const form = reactive({});
const item = reactive({});

const setForm = (data) => {
    Object.assign(form, data);
    Object.assign(item, data);
};
</script>
`);
        } else {
            // Show pages (Basic, Contact, Login)
            fs.writeFileSync(filePath, `<template>
  <PageHeader
    :title="$trans('${pm.transKey}.props.${page.label}')"
    :navs="[
      { label: $trans('${pm.transKey}.${pm.transKey}'), path: '${pm.route}List' },
      { label: item.name || '', path: { name: '${pm.route}Show', params: { uuid: $route.params.uuid } } },
    ]"
  />

  <ParentTransition appear :visibility="true">
    <ShowItem
      :init-url="initUrl"
      :uuid="$route.params.uuid"
      @set-item="setItem"
    >
      <template v-if="item.uuid">
        <BaseCard no-padding no-content-padding>
          <template #title>{{ $trans('${pm.transKey}.props.${page.label}') }}</template>
          <ListContainerVertical>
            <!-- TODO: Add ${page.label} detail fields from beautified source -->
            <ListItemView :label="$trans('general.name')">{{ item.name }}</ListItemView>
          </ListContainerVertical>
        </BaseCard>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const initUrl = '${pm.basePath}/';
const item = reactive({});

const setItem = (data) => {
    Object.assign(item, data);
};
</script>
`);
        }
        generated++;
    }
}

console.log(`Generated ${generated} person detail pages.`);
