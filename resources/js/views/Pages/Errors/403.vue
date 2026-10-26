<template>
  <ErrorPage
    type="403"
    :title="$trans('general.errors.403_title')"
    :description="$trans('general.errors.403_description')"
  >
    <BaseButton type="button" @click="router.push({ name: 'Dashboard' })">
      {{ $trans('dashboard.dashboard') }}
    </BaseButton>
    <BaseButton design="danger" type="button" @click="logout">
      {{ $trans('auth.login.logout') }}
    </BaseButton>
  </ErrorPage>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const logout = async () => {
    try {
        await store.dispatch('auth/user/logout', {});
        router.push({ name: 'Login' });
    } catch (e) {}
};
</script>
