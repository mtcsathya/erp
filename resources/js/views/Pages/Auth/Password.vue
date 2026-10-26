<template>
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
</script>
