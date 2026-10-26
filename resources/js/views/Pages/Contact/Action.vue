<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('contact.contact'), path: 'Contact' },
      { label: $trans('contact.contact'), path: 'ContactList' },
    ]"
  >
    <PageHeaderAction name="Contact" :title="$trans('contact.contact')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ContactForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ContactForm from './Form.vue';
const route = useRoute();
</script>
