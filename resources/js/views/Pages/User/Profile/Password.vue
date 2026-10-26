<template>
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
</script>
