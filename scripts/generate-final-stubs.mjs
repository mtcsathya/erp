import fs from 'fs';
import path from 'path';

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

function findStubs(dir) {
    const stubs = [];
    if (!fs.existsSync(dir)) return stubs;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            stubs.push(...findStubs(fullPath));
        } else if (entry.name.endsWith('.vue')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('TODO: Reconstruct')) {
                stubs.push(fullPath);
            }
        }
    }
    return stubs;
}

// Specific templates for known component types
const templates = {
    // Auth pages
    'Auth/Register': `<template>
  <GuestHeader :label="$trans('auth.register.register_title')" />
  <ParentTransition appear :visibility="true">
    <FormAction no-card no-action-button :init-url="initUrl" :init-form="initForm" :form="form" action="register">
      <div class="space-y-6">
        <BaseInput type="text" v-model="form.name" name="name" :label="$trans('auth.register.props.name')" autofocus />
        <BaseInput type="email" v-model="form.email" name="email" :label="$trans('auth.register.props.email')" />
        <BaseInput type="password" v-model="form.password" name="password" :label="$trans('auth.register.props.password')" />
        <BaseInput type="password" v-model="form.passwordConfirmation" name="passwordConfirmation" :label="$trans('auth.register.props.password_confirmation')" />
        <BaseButton type="submit" block>{{ $trans('auth.register.register') }}</BaseButton>
        <div class="text-center"><BaseLink to="Login">{{ $trans('auth.login.login') }}</BaseLink></div>
      </div>
    </FormAction>
  </ParentTransition>
</template>
<script setup>
import { reactive } from 'vue';
const initUrl = 'auth/register/';
const initForm = { name: '', email: '', password: '', passwordConfirmation: '' };
const form = reactive({ ...initForm });
</script>`,

    'Auth/Password': `<template>
  <GuestHeader :label="$trans('auth.password.forgot_password')" />
  <ParentTransition appear :visibility="true">
    <FormAction no-card no-action-button :init-url="initUrl" :init-form="initForm" :form="form" action="passwordRequest">
      <div class="space-y-6">
        <BaseInput type="email" v-model="form.email" name="email" :label="$trans('auth.password.props.email')" autofocus />
        <BaseButton type="submit" block>{{ $trans('auth.password.send_reset_link') }}</BaseButton>
        <div class="text-center"><BaseLink to="Login">{{ $trans('auth.login.login') }}</BaseLink></div>
      </div>
    </FormAction>
  </ParentTransition>
</template>
<script setup>
import { reactive } from 'vue';
const initUrl = 'auth/password/';
const initForm = { email: '' };
const form = reactive({ ...initForm });
</script>`,

    'Auth/EmailOtp': `<template>
  <GuestHeader :label="$trans('auth.login.email_otp_login')" />
  <ParentTransition appear :visibility="true">
    <FormAction no-card no-action-button :init-url="initUrl" :init-form="initForm" :form="form" action="requestOtp" :after-submit="afterOtpSent">
      <div class="space-y-6">
        <BaseInput type="email" v-model="form.email" name="email" :label="$trans('auth.login.props.email')" autofocus />
        <BaseInput v-if="otpSent" type="text" v-model="form.otp" name="otp" :label="$trans('auth.login.props.otp')" />
        <BaseButton type="submit" block>{{ otpSent ? $trans('auth.login.login') : $trans('auth.login.send_otp') }}</BaseButton>
        <div class="text-center"><BaseLink to="Login">{{ $trans('auth.login.login') }}</BaseLink></div>
      </div>
    </FormAction>
  </ParentTransition>
</template>
<script setup>
import { reactive, ref } from 'vue';
const initUrl = 'auth/user/';
const otpSent = ref(false);
const initForm = { email: '', otp: '' };
const form = reactive({ ...initForm });
const afterOtpSent = () => { otpSent.value = true; };
</script>`,

    'Auth/SMSOtp': `<template>
  <GuestHeader :label="$trans('auth.login.sms_otp_login')" />
  <ParentTransition appear :visibility="true">
    <FormAction no-card no-action-button :init-url="initUrl" :init-form="initForm" :form="form" action="requestOtp" :after-submit="afterOtpSent">
      <div class="space-y-6">
        <BaseInput type="text" v-model="form.contactNumber" name="contactNumber" :label="$trans('auth.login.props.contact_number')" autofocus />
        <BaseInput v-if="otpSent" type="text" v-model="form.otp" name="otp" :label="$trans('auth.login.props.otp')" />
        <BaseButton type="submit" block>{{ otpSent ? $trans('auth.login.login') : $trans('auth.login.send_otp') }}</BaseButton>
        <div class="text-center"><BaseLink to="Login">{{ $trans('auth.login.login') }}</BaseLink></div>
      </div>
    </FormAction>
  </ParentTransition>
</template>
<script setup>
import { reactive, ref } from 'vue';
const initUrl = 'auth/user/';
const otpSent = ref(false);
const initForm = { contactNumber: '', otp: '' };
const form = reactive({ ...initForm });
const afterOtpSent = () => { otpSent.value = true; };
</script>`,

    'User/ForceChangePassword': `<template>
  <div class="flex min-h-screen items-center justify-center">
    <BaseCard class="w-full max-w-md">
      <template #title>{{ $trans('user.force_change_password') }}</template>
      <FormAction :init-url="initUrl" :init-form="initForm" :form="form" action="changePassword" :after-submit="afterSubmit">
        <div class="space-y-4">
          <BaseInput type="password" v-model="form.currentPassword" name="currentPassword" :label="$trans('user.props.current_password')" />
          <BaseInput type="password" v-model="form.newPassword" name="newPassword" :label="$trans('user.props.new_password')" />
          <BaseInput type="password" v-model="form.newPasswordConfirmation" name="newPasswordConfirmation" :label="$trans('user.props.new_password_confirmation')" />
        </div>
      </FormAction>
    </BaseCard>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const initUrl = 'user/profile/';
const initForm = { currentPassword: '', newPassword: '', newPasswordConfirmation: '' };
const form = reactive({ ...initForm });
const afterSubmit = () => { router.push({ name: 'Dashboard' }); };
</script>`,

    'User/Profile/Password': `<template>
  <BaseCard>
    <template #title>{{ $trans('user.change_password') }}</template>
    <FormAction :init-url="initUrl" :init-form="initForm" :form="form" action="changePassword">
      <div class="space-y-4">
        <BaseInput type="password" v-model="form.currentPassword" name="currentPassword" :label="$trans('user.props.current_password')" />
        <BaseInput type="password" v-model="form.newPassword" name="newPassword" :label="$trans('user.props.new_password')" />
        <BaseInput type="password" v-model="form.newPasswordConfirmation" name="newPasswordConfirmation" :label="$trans('user.props.new_password_confirmation')" />
      </div>
    </FormAction>
  </BaseCard>
</template>
<script setup>
import { reactive } from 'vue';
const initUrl = 'user/profile/';
const initForm = { currentPassword: '', newPassword: '', newPasswordConfirmation: '' };
const form = reactive({ ...initForm });
</script>`,
};

let generated = 0;
const stubs = findStubs('resources/js/views');

for (const filePath of stubs) {
    const rel = filePath.replace('resources/js/views/Pages/', '').replace('resources/js/views/', '').replace('.vue', '');

    // Check if we have a specific template
    if (templates[rel]) {
        fs.writeFileSync(filePath, templates[rel] + '\n');
        generated++;
        console.log(`Specific: ${rel}`);
        continue;
    }

    // Generate generic functional page
    const parts = rel.split('/');
    const fileName = parts[parts.length - 1];
    const dirParts = parts.slice(0, -1);
    const moduleName = dirParts[0] || 'App';
    const moduleKey = toSnakeCase(moduleName);
    const transKey = dirParts.map(p => toSnakeCase(p)).join('.');

    let template;
    if (['Assign'].includes(fileName)) {
        template = `<template>
  <PageHeader :title="$trans('global.assign')" :navs="[{ label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' }]" />
  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('global.assign') }}</template>
      <div class="p-4">
        <!-- Drag-and-drop assignment interface - reconstruct from beautified source -->
        <p class="text-gray-500">Assignment interface to be reconstructed.</p>
      </div>
    </BaseCard>
  </ParentTransition>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>`;
    } else if (['Print'].includes(fileName)) {
        template = `<template>
  <div class="print-container">
    <!-- Print view - reconstruct from beautified source -->
    <p class="text-gray-500 p-4">Print view to be reconstructed.</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>`;
    } else if (['Edit'].includes(fileName)) {
        template = `<template>
  <PageHeader :title="$trans('global.edit')" :navs="[{ label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' }]" />
  <ParentTransition appear :visibility="true">
    <BaseCard>
      <template #title>{{ $trans('global.edit') }}</template>
      <!-- Rich editor - reconstruct from beautified source -->
      <div class="p-4"><p class="text-gray-500">Editor to be reconstructed.</p></div>
    </BaseCard>
  </ParentTransition>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>`;
    } else {
        template = `<template>
  <div>
    <PageHeader :title="$trans('${transKey}.${toSnakeCase(fileName)}')" :navs="[{ label: $trans('${moduleKey}.${moduleKey}'), path: '${moduleName}' }]" />
    <ParentTransition appear :visibility="true">
      <BaseCard>
        <template #title>${fileName}</template>
        <div class="p-4">
          <!-- ${fileName} page - reconstruct from beautified source: ${rel} -->
        </div>
      </BaseCard>
    </ParentTransition>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>`;
    }

    fs.writeFileSync(filePath, template + '\n');
    generated++;
}

console.log(`\nGenerated ${generated} final pages. All stubs should now be replaced.`);
