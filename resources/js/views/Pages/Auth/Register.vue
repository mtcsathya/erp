<template>
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
</script>
