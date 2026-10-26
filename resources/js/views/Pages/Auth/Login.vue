<template>
  <GuestHeader :label="$trans('auth.login.login_title')" />

  <ParentTransition appear :visibility="true">
    <FormAction
      no-card
      no-action-button
      :init-url="initUrl"
      :init-form="initForm"
      :form="form"
      action="login"
      :after-submit="afterSubmit"
    >
      <div class="space-y-6">
        <BaseInput
          type="text"
          leading-icon="fas fa-envelope"
          v-model="form.email"
          name="email"
          :label="$trans('auth.login.props.email_or_username')"
          v-model:error="formErrors.email"
          autofocus
        />

        <BaseInput
          type="password"
          leading-icon="fas fa-key"
          v-model="form.password"
          name="password"
          :label="$trans('auth.login.props.password')"
          v-model:error="formErrors.password"
        />

        <div class="flex items-center justify-between">
          <BaseCheckbox
            v-model="form.rememberMe"
            name="rememberMe"
            :label="$trans('auth.login.props.remember_me')"
          />
          <BaseLink v-if="enableResetPassword" to="Password">
            {{ $trans('auth.password.forgot_password') }}
          </BaseLink>
        </div>

        <!-- OTP Login links -->
        <div v-if="enableOtpLogin" class="flex justify-between gap-2">
          <BaseLink v-if="enableSmsOtpLogin" to="SmsOtpLogin">
            {{ $trans('auth.login.sms_otp_login') }}
          </BaseLink>
          <BaseLink v-if="enableEmailOtpLogin" to="EmailOtpLogin">
            {{ $trans('auth.login.email_otp_login') }}
          </BaseLink>
        </div>

        <!-- OAuth providers -->
        <div v-if="enableOauthLogin" class="flex justify-center space-x-2">
          <BaseButton v-if="enableGoogleOauth" as="a" href="/auth/google/redirect" design="danger" size="xs" v-tooltip="$trans('config.auth.props.login_with_client', { attribute: 'Google' })">
            <i class="fab fa-google"></i>
          </BaseButton>
          <BaseButton v-if="enableFacebookOauth" as="a" href="/auth/facebook/redirect" design="facebook" size="xs" v-tooltip="$trans('config.auth.props.login_with_client', { attribute: 'Facebook' })">
            <i class="fab fa-facebook"></i>
          </BaseButton>
          <BaseButton v-if="enableTwitterOauth" as="a" href="/auth/twitter/redirect" design="info" size="xs" v-tooltip="$trans('config.auth.props.login_with_client', { attribute: 'Twitter' })">
            <i class="fab fa-twitter"></i>
          </BaseButton>
          <BaseButton v-if="enableGithubOauth" as="a" href="/auth/github/redirect" size="xs" v-tooltip="$trans('config.auth.props.login_with_client', { attribute: 'Github' })">
            <i class="fab fa-github"></i>
          </BaseButton>
          <BaseButton v-if="enableMicrosoftOauth" as="a" href="/auth/microsoft/redirect" size="xs" v-tooltip="$trans('config.auth.props.login_with_client', { attribute: 'Microsoft' })">
            <i class="fab fa-microsoft"></i>
          </BaseButton>
        </div>

        <!-- Register link -->
        <div v-if="enableRegistration" class="flex items-center justify-center">
          <BaseLink to="Register">
            {{ $trans('auth.register.register_title') }}
          </BaseLink>
        </div>

        <BaseButton type="submit" block>
          {{ $trans('auth.login.login') }}
        </BaseButton>
      </div>
    </FormAction>
  </ParentTransition>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const initUrl = 'auth/user/';
const formErrors = reactive({});

// Config flags (resolved via store getter)
const cfg = (key) => store.getters['config/config']?.(key);
const enableOauthLogin = cfg('auth.enableOauthLogin');
const enableRegistration = cfg('auth.enableRegistration');
const enableResetPassword = cfg('auth.enableResetPassword');
const enableGoogleOauth = cfg('auth.enableGoogleOauthLogin');
const enableFacebookOauth = cfg('auth.enableFacebookOauthLogin');
const enableTwitterOauth = cfg('auth.enableTwitterOauthLogin');
const enableGithubOauth = cfg('auth.enableGithubOauthLogin');
const enableMicrosoftOauth = cfg('auth.enableMicrosoftOauthLogin');
const enableOtpLogin = cfg('auth.enableOtpLogin');
const enableEmailOtpLogin = cfg('auth.enableEmailOtpLogin');
const enableSmsOtpLogin = cfg('auth.enableSmsOtpLogin');
const enablePost = cfg('feature.enablePost');
const redirectToPost = cfg('post.enableRedirectToPostAfterLogin');

const initForm = { email: '', password: '', rememberMe: false };
const form = reactive({ ...initForm });

onMounted(async () => {
    await store.dispatch('auth/user/setCSRF');
});

const afterSubmit = () => {
    Object.assign(form, initForm);
    if (route.query.ref) {
        router.push(route.query.ref);
    } else if (enablePost?.value && redirectToPost?.value) {
        router.push({ name: 'Home' });
    } else {
        router.push({ name: 'Dashboard' });
    }
};
</script>
