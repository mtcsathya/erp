<template>
  <NotificationBar type="guest" />

  <div class="dark:bg-dark-body scroller-thin-y scroller-hidden flex min-h-screen bg-gray-50">
    <!-- Left side - background image -->
    <div class="relative hidden flex-1 md:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="guestBackground"
        alt=""
      />
    </div>

    <!-- Right side - form area -->
    <div class="flex-1 p-4 sm:p-16 lg:flex-none lg:p-32">
      <div class="flex h-full flex-col justify-center">
        <div class="flex justify-center">
          <a href="/" class="mb-6">
            <img class="h-16 w-auto" :src="icon" alt="" />
          </a>
        </div>

        <div class="dark:bg-dark-header mx-auto w-full rounded-xl bg-white px-8 py-10 shadow-md sm:w-96">
          <router-view />
        </div>

        <!-- Quick action buttons -->
        <div class="mt-4 max-w-sm flex justify-center flex-wrap gap-2">
          <BaseButton v-if="enablePost" size="xs" @click="router.push({ name: 'SitePost' })">
            {{ $trans('post.updates') }}
          </BaseButton>
          <BaseButton v-if="enableGuestPayment" size="xs" @click="router.push({ name: 'GuestPayment' })">
            {{ $trans('student.payment.online') }}
          </BaseButton>
          <BaseButton v-if="enableJobApplication" size="xs" @click="router.push({ name: 'JobVacancies' })">
            {{ $trans('recruitment.application.application') }}
          </BaseButton>
          <BaseButton v-if="enableOnlineEnquiry" size="xs" @click="router.push({ name: 'OnlineEnquiry' })">
            {{ $trans('reception.online_enquiry.online_enquiry') }}
          </BaseButton>
          <BaseButton v-if="enableOnlineRegistration" size="xs" @click="router.push({ name: 'OnlineRegistration' })">
            {{ $trans('student.online_registration.online_registration') }}
          </BaseButton>
          <BaseButton v-if="enableTransferCertVerification" size="xs" @click="router.push({ name: 'TransferCertificate' })">
            {{ $trans('student.transfer_certificate.verification') }}
          </BaseButton>
        </div>

        <FooterCredit />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const cfg = (key) => store.getters['config/config']?.(key);
const guestBackground = cfg('assets.guestBackground');
const displayMode = cfg('layout.display')?.value;
const icon = displayMode === 'dark' ? cfg('assets.iconLight') : cfg('assets.icon');

const enableGuestPayment = cfg('feature.enableGuestPayment')?.value;
const enablePost = cfg('feature.enablePost')?.value;
const enableJobApplication = cfg('feature.enableJobApplication')?.value;
const enableOnlineEnquiry = cfg('feature.enableOnlineEnquiry')?.value;
const enableOnlineRegistration = cfg('feature.enableOnlineRegistration')?.value;
const enableTransferCertVerification = cfg('feature.enableTransferCertificateVerification')?.value;
</script>
