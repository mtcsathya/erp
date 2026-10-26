<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('team.team'), path: 'Team' },
      { label: $trans('team.team'), path: 'TeamList' },
    ]"
  >
    <PageHeaderAction name="Team" :title="$trans('team.team')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <TeamForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TeamForm from './Form.vue';
const route = useRoute();
</script>
