<template>
  <ErrorPage
    type="error"
    :title="$trans('general.errors.error_title')"
    :description="$trans('general.errors.error_description')"
  >
    <BaseButton type="button" @click="router.push({ name: 'Dashboard' })">
      {{ $trans('dashboard.dashboard') }}
    </BaseButton>
  </ErrorPage>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
