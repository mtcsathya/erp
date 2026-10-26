<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('communication.communication'), path: 'Communication' },
      { label: $trans('communication.announcement.announcement'), path: 'CommunicationAnnouncementList' },
    ]"
  >
    <PageHeaderAction name="CommunicationAnnouncement" :title="$trans('communication.announcement.announcement')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <CommunicationAnnouncementForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import CommunicationAnnouncementForm from './Form.vue';
const route = useRoute();
</script>
