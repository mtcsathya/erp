<template>
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
</script>
