<template>
  <!-- Re-authentication modal triggered on 401 responses -->
  <BaseModal :show="showReLogin" @close="dismiss">
    <template #title>{{ $trans('auth.login.session_expired') }}</template>
    <div class="space-y-4">
      <BaseInput type="password" v-model="password" name="password" :label="$trans('auth.login.props.password')" />
      <BaseButton @click="reAuthenticate" :is-loading="isLoading" block>
        {{ $trans('auth.login.login') }}
      </BaseButton>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const showReLogin = ref(false);
const password = ref('');
const isLoading = ref(false);

const dismiss = () => { showReLogin.value = false; };

const reAuthenticate = async () => {
    isLoading.value = true;
    try {
        await axios.post('/api/app/auth/re-login', { password: password.value });
        showReLogin.value = false;
        password.value = '';
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401 && error.response?.data?.reLogin) {
                showReLogin.value = true;
            }
            return Promise.reject(error);
        }
    );
});
</script>
