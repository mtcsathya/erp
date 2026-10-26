<template>
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
</script>
